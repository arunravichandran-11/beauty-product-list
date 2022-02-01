import React from "react";
import Card from "../../core/Card";

import { CardAction, CardImage, CardSummary } from "../../core/Card";
import "./ArticleCard.scss";

const Rating = ({ rating }: any) => {
  const max = 100;
  const totalStar = 5;
  const convertedRating = rating / (max / totalStar);

  const renderStars = (rating: any) => {
    return Array.from([1, 2, 3, 4, 5], (item) => {
      if (item <= rating) {
        return <i className="fas fa-star" key={item}></i>;
      } else {
        if (rating % 1 === 0) {
          return <i className="far fa-star" key={item}></i>;
        } else {
          if (Math.ceil(rating) === item) {
            return <i className="fas fa-star-half-alt" key={item}></i>;
          } else {
            return <i className="far fa-star" key={item}></i>;
          }
        }
      }
    });
  };
  return <div>{renderStars(convertedRating)}</div>;
};

const ArticleCard = ({ className, article, actions }: any) => {
  return (
    <Card className={className}>
      <CardImage image={article.image} alt="product" />
      <CardSummary title={article.name}>
        <Rating rating={article.rating} />
        <div>{article.price}</div>
        <div>{article.rating}</div>
      </CardSummary>
      {actions && <CardAction>{actions}</CardAction>}
    </Card>
  );
};

export default ArticleCard;
