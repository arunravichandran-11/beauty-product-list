import React from "react";
import Card from "../../core/Card";

import { CardAction, CardImage, CardSummary } from "../../core/Card";
import "./ArticleCard.scss";

const ArticleCard = ({ className, article, actions }: any) => {
  return (
    <Card className={className}>
      <CardImage image={article.image} alt="product" />
      <CardSummary title={article.name}>
        <div>{article.price}</div>
        <div>brand- {article.brand}</div>
        <div>Type - {article.type}</div>
      </CardSummary>
      {actions && <CardAction>{actions}</CardAction>}
    </Card>
  );
};

export default ArticleCard;
