import React from 'react'

function Articles({article}) {

    return (
       <div className="article-body my-4 col-md-4">
           <img src={article.img} alt="" className="article-img" />
           <div className="article-text">
               <div className="article-date-body pt-3">
                   <span className="article-date pe-2">{article.date}</span>
                   <span className="article-min">{article.time}</span>
               </div>
               <h1 className="article-title">{article.title}</h1>
               <p className="article-description">{article.text}</p>
           </div>
            
       </div>
    )
}

export default Articles
