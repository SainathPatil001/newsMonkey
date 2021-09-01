import React, { useEffect ,useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
// import {useLocation} from "react-router-dom"
const News =(props)=> {


// const [state, setState] = useState({
//   articles:[],
//   totalResults:0,
//   loading:true,
//   page:1
// })

const [articles, setArticles] = useState([])
const [loading, setLoading] = useState(true)
const [totalResults, setTotalResults] = useState(0)
const [page, setPage] = useState(1)

  useEffect(() => {

    document.title=`${capitiliazeFirstLetter(props.category)}:NewsMonkey`
    updateNews()
    setCountry()
     // eslint-disable-next-line
  }, [])
   
  
 const setCountry=()=>{
   

   props.setcountry(props.country)
 }
   const capitiliazeFirstLetter=(string)=>{
     return string.charAt(0).toUpperCase()+string.slice(1);
   }
  const updateNews=async()=>{

    props.setProgress(10);
    setLoading({loading:true})
    let url =
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    
      
    let data = await fetch(url);
    props.setProgress(30);

    let parsedData = await data.json();
  
    props.setProgress(70);


    //console.log(parsedData.articles);
    setArticles( parsedData.articles );
    setTotalResults(parsedData.totalResults)
    
    setLoading(false)
    //console.log(articles);
    props.setProgress(100);
  }
  
      
     
  

    const fetchMoreData=async()=>{

    let url =
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    
      setPage(page+1)
      
    let data = await fetch(url);
    let parsedData = await data.json();
   
    setArticles( articles.concat(parsedData.articles));
  }

  
    return (
      
      <div className="container">


        <h1 className="text-center" style={{marginTop:"90px"}}>NewsMonkey-:Top {capitiliazeFirstLetter(props.category)} HeadLines</h1>
        { loading&&<Spinner/>}
        
       
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !==totalResults}
          loader={<Spinner></Spinner>}
        >

          <div className="container" style={{overflowX:"hidden"}}>
        <div className="row">

      
          {
          
          articles.map((item) => {
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

 News.defaulProps={
  country:"in",
  pageSize:6,
  category:"science"
}

News.propTypes={
country:PropTypes.string,
category:PropTypes.string,

}

export default News;
