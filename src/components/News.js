import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {



  static defaulProps={
       country:"in",
       pageSize:6,
       category:"science"
  }

  static propTypes={
    country:PropTypes.string,
    category:PropTypes.string,

  }
  constructor(props) {
    super(props);
    this.state = { articles: [], loading: true ,page:1,totalResults:0};

    document.title=`${this.capitiliazeFirstLetter(this.props.category)} NewsMonkey`
  }

   capitiliazeFirstLetter=(string)=>{
     return string.charAt(0).toUpperCase()+string.slice(1);
   }
  async updateNews(){
    this.setState({loading:true})
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ac89da4ef4524484b5106b2e12e64609&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    
      
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles , totalResults:parsedData.totalResults,loading:false});
  }
  async componentDidMount() {
      this.updateNews()
     
  }

  componentDidUpdate(){

  }
  handlePreviousClick=async()=>{
          this.setState({page:this.state.page-1},()=>{
            this.updateNews();

          });
  }

  handleNextClick=async()=>{
            
    this.setState({page:this.state.page+1},()=>{
      this.updateNews();
      })
 

    }

    fetchMoreData=async()=>{

      this.setState({page:this.state.page+1})
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ac89da4ef4524484b5106b2e12e64609&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    
      
    let data = await fetch(url);
    let parsedData = await data.json();
   
    this.setState({ articles: this.state.articles.concat(parsedData.articles) , totalResults:parsedData.totalResults,loading:false});
    console.log(this.state.articles.length);
    console.log(this.state.totalResults);
  }
  render() {

  
    return (
      <div className="container">


        <h1 className="text-center" style={{margin:"30px"}}>NewsMonkey-:Top {this.capitiliazeFirstLetter(this.props.category)} HeadLines</h1>
        { this.state.loading&&<Spinner/>}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !==this.state.totalResults}
          loader={<Spinner></Spinner>}
        >

          <div className="container" style={{overflowX:"hidden"}}>
        <div className="row">

      
          {
          
          this.state.articles.map((item) => {
            return (

             
              <div className="col-md-4 my-2" key={item.url}>
                <NewsItem
                  title={item.title}
                  imageUrl={item.urlToImage}
                  newsUrl={item.url}
                  description={
                    item.description && item.description.slice(0, 80)
                  }

                  author={item.author}
                  date={item.publishedAt}
                  source={item.source.name}
                />

              </div>

            );

         
          })}

</div>  
        </div>
        </InfiniteScroll>

      </div>
    );
  }
}

export default News;
