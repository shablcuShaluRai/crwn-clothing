import React, { Component } from "react";
import SHOP_DATA from "./shopData";
import CollectionPreview from "../previewCollection";

class Shop extends Component {
  state = {
    collection: SHOP_DATA,
  };
  render() {
    const { collection } = this.state;
    return (
      <div className="shop-page">
        {collection.map(({ id, ...otherCollectipnProps }) => (
          <CollectionPreview key={id} {...otherCollectipnProps} />
        ))}
      </div>
    );
  }
}

export default Shop;
