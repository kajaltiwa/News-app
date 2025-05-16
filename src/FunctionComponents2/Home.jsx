import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import NewsItem from "./NewsItem";
import { useSearchParams } from "react-router-dom";

export default function Home() {
  let [articles, setArticles] = useState([]);
  let [totalResults, setTotalResults] = useState(0);
  let [page, setPage] = useState(1);
  let [searchParams,setSearchParams] = useSearchParams()

  async function getAPIData() {
    let response = await fetch(
      `https://newsapi.org/v2/everything?q=${searchParams.get("q")??"All"}&language=${searchParams.get("language")??"hi"}&page=1&pageSize=24&sortBy=publishedAt&apiKey=649b661ed1814073be11be37886daae9`
    );
    response = await response.json();
    if (response.status === "ok") {
      setArticles(response.articles)
      setTotalResults(response.totalResults)
    }
  }
  let fetchData = async () => {
    setPage(page+1)
    let response = await fetch(
      `https://newsapi.org/v2/everything?q=${searchParams.get("q")??"All"}&language=${searchParams.get("language")??"hi"}&page=${page}&pageSize=24&sortBy=publishedAt&apiKey=649b661ed1814073be11be37886daae9`
    );
    response = await response.json();
    if(response.status === "ok"){
      setArticles(articles.concat(response.articles))
    }
  };

  useEffect(()=>{
    getAPIData()
  },[searchParams])

  return (
    <>
      <div className="container-fluid ">
        <h5 className="text-capitalize background text-center text-center text-light p-2 mt-1">
          {searchParams.get("q")??"All"} Articles
        </h5>

        <InfiniteScroll
          dataLength={articles.length} //This is important field to render the next data
          next={fetchData}
          hasMore={articles.length < totalResults}
          loader={
            <div className="my-5 text-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          }
        >
          <div className="row">
            {articles.map((item, index) => {
              return (
                <NewsItem
                  key={index}
                  title={item.title}
                  description={item.description}
                  url={item.url}
                  pic={item.urlToImage}
                  date={item.publishedAt}
                  source={item.source?.name}
                />
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
}
