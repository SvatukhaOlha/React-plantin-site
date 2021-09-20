import React from 'react';

// ARTICLE FROM NEW SECTION
function NewArticle({ article }) {
  return (
    <div className="new-article">
        <div className="article-body">
          <img className="article-marker my-4" src={article.newMarker}></img>
          <div className="new-article-box-desk">
              <img src={article.img} alt="nature" className="new-article-img article-img" />
            <div className="article-text">
              <div className="article-date-body pt-3">
                <span className="article-date pe-2">{article.date}</span>
                <span className="article-min">{article.time}</span>
              </div>
              <h1 className="new-article-title">{article.title}</h1>
             <div className="article-description">
                <p>{article.text}</p>
             </div>
            </div>
          </div>
          <hr class="solid" />
        <h5 className='marker-title'>Top of the day</h5>
      </div>
    </div>
  );
}

export default NewArticle;
