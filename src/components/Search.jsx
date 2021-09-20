import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormControl, Image } from 'react-bootstrap';
import data from '../data';
import Article from './Article';
import Advertisement from './Advertisement';
import Weather from './Weather';
import NewArticle from './NewArticle';
import TopOfDay from './TopOfDay';
import InfiniteScroll from 'react-infinite-scroll-component';

function Search(props) {
  const [search, setSearch] = useState('');
  const [getSearch, setGetSearch] = useState('');
  const [articles, setArticles] = useState([]);

  // Gives the search
  function giveInputValue(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  function getSearchResult(e) {
    e.preventDefault();
    setGetSearch(search.toLowerCase());
  }

  // Gives the result of search
  useEffect(() => {
    const searchResults = data.filter((el) => {
      if (
        el.text.toLowerCase().includes(getSearch) ||
        el.title.toLowerCase().includes(getSearch)
      ) {
        return true;
      }
    });
    setArticles(searchResults);
  }, [getSearch]);

  // Return Articles
  let results = articles.slice(3).map((article) => {
    return <Article article={article} />;
  });

  // Adds Ads after 6 articles in the "Interesting" section
  results.splice(6, 0, <Advertisement />);

  return (
    <div className="container">
      <div className="row">
        <div className="search p-3">
          <div className="menu-path">
            <a href="#" className="menu-link">
              <img src="./img/arrow-left.png" alt="arrow left" />
              Home
            </a>
          </div>
          <div className="search-block">
            <div className="search-contanier">
              <div className="search-text">
                <h1 className="colored-heading">
                  Stay always tuned with planting trends
                </h1>
                {/* Shows the curent weather by your location */}
                <Weather temp={props.temp} />
                <h3 className="search-subtitle-mob">
                  <b>Tips & Tricks</b> selected specially for <b>you!</b>
                </h3>
              </div>
              <Form
                className="d-flex flex-nowrap justify-content-center search-form"
                onClick={getSearchResult}
              >
                <FormControl
                  onChange={giveInputValue}
                  type="search"
                  placeholder="Search"
                  className="input-blog-page border-0 col-4"
                />
                <div
                  onClick={getSearchResult}
                  variant="outline-success"
                  className="border-0 btn-search"
                >
                  <Image
                    src="./img/search-input-small.svg"
                    className="search-icon"
                  />
                </div>
              </Form>
            </div>
            <div className="search-img-desk">
              <img
                src="./img/main_page.svg"
                alt="girl"
                className="search-img-desk"/>
            </div>
          </div>
          {/* Renders Article in the New section */}
          {articles[0] && <NewArticle article={articles[0]} />}
          {/*  Renders Article in the Top Of The Day section */}
          <div className="top-of-day">
            {articles[0] &&
              articles.slice(1, 3).map((article) => {
                return <TopOfDay article={article} />;
            })}
          </div>
          <hr class="solid" />
          <h5 className="marker-title">Interesting</h5>
          
          {/* Infinitive scroll. 
          Instaled this react package here 
          https://www.npmjs.com/package/react-infinite-scroll-component */}
          <InfiniteScroll
            className="articles row"
            dataLength={results.length} //This is important field to render the next data
            next={() => setArticles([...articles, ...articles.slice(-3)])} //old articles + 3 latest
            hasMore={true}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }>
            {/* Renders articles from "Interesting section" */}
            {results}
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
}

export default Search;
