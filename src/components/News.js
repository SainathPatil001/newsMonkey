import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

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
  constructor() {
    super();
    this.state = { articles: [], loading: true ,page:1,totalResults:0};
  }

  async componentDidMount() {
    this.setState({loading:true})
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ac89da4ef4524484b5106b2e12e64609&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    
      
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles , totalResults:parsedData.totalResults,loading:false});



  }
  handlePreviousClick=async()=>{
    this.setState({loading:true})
    let url =
    `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ac89da4ef4524484b5106b2e12e64609&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;

  let data = await fetch(url);
  let parsedData = await data.json();
  this.setState({ articles: parsedData.articles ,page:this.state.page-1,loading:false});
  }

  handleNextClick=async()=>{
    this.setState({loading:true})
    let url =
    `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ac89da4ef4524484b5106b2e12e64609&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;

  let data = await fetch(url);
  let parsedData = await data.json();
  this.setState({ articles: parsedData.articles ,page:this.state.page+1,loading:false});

    }
  render() {
    return (
      <div className="container">


        <h1 className="text-center" style={{margin:"30px"}}>News Monkey-:Top HeadLines</h1>
        { this.state.loading&&<Spinner/>}
        <div className="row">
          {!this.state.loading&& this.state.articles&&this.state.articles.map((item) => {
            return (
              <div className="col-md-4 my-1" key={item.url}>
                <NewsItem
                  title={item.title}
                  imageUrl={item.urlToImage}
                  newsUrl={item.url}
                  description={
                    item.description && item.description.slice(0, 80)
                  }

                  author={item.author}
                  date={item.publishedAt}
                />

           
              </div>
            );
          })}
               <div className="container d-flex justify-content-between m-3">
                <button  disabled={this.state.page<=1}  type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
                <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
        </div>
      </div>
    );
  }
}

export default News;
