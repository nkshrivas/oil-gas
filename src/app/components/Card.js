import React from 'react';
import '../../../public/css/card.css';

const Card = ({ title, meta, date, imageUrl, author, authorTitle, link }) => {
  return (
    <div className="card-container">
      <div className="card" >
        <img className="card-img d-none" src={imageUrl} alt={title} />
        <div className="card-overlay">
          <div className="card-body">
            <small className="card-meta">{meta}</small>
            <h4 className="card-title">
              <a href={link}>{title}</a>
            </h4>
            <small><i className="far fa-clock"></i> {date}</small>
          </div>
          {author && <div className="card-footer">
            <div className="media">
              <img className="media-img" src="https://assets.codepen.io/460692/internal/avatars/users/default.png?format=auto&version=1688931977&width=80&height=80" alt={author} />
              <div className="media-body">
                <h6 className="author-name">{author}</h6>
                <small>{authorTitle}</small>
              </div>
            </div>
          </div>}
        </div>
      </div>
    </div>
  );
};

export default Card;
