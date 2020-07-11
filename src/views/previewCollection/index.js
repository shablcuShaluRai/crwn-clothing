import React from "react";
import CollectionItems from "../CollectionItems"
import "./preview.scss";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>

    <div className="preview">
      {items.filter((item, idx) => idx < 4).map(({id, ...otherItemsProps}) => (
        <CollectionItems key={id} {...otherItemsProps} />
      ))}
    </div>
  </div>
);

export default CollectionPreview;
