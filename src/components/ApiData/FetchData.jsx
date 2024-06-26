import React, { useEffect, useState,useCallback } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { News } from "./StyledFetchNews";
function FetchData({ cat }) {
  const [Data, setData] = useState("");
  const fetchData = useCallback(async () => {
    await axios
      .get(
        cat
          ? `https://newsapi.org/v2/top-headlines?country=us&category=${cat}&apiKey=5a94b1740aba42ddbb76fe966b3e33ce`
          : "https://newsapi.org/v2/top-headlines?country=us&apiKey=5a94b1740aba42ddbb76fe966b3e33ce"
      )
      .then((res) =>
        setData(res.data.articles.filter((article) => article.urlToImage))
      );
  },[cat])
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="container-md">
      <h4 className="text-center p-3">Top Headlines</h4>
      <News>
        {Data ? (
          Data.map((items) => (
            <>
              <div className="news-box">
                <img
                  src={items.urlToImage}
                  className="img-fluid"
                  alt="Not Available"
                />
                <h4> {items.title} </h4>
                <p>
                  {items.description}
                  <Link className="link" to={items.url}>
                    Read More...
                  </Link>
                </p>
                <span>{items.publishedAt}</span>
              </div>
            </>
          ))
        ) : (
          <div className="spinner-border spinner" role="status">
            <span className="sr-only "></span>
          </div>
        )}
      </News>
    </div>
  );
}

export default FetchData;
