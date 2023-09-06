import React from 'react'
import '../Styles/ProductCard.css';

function ProductCard({id, name, pic}) {

    return (
      <>
        <div key={id} id='ProductCard'>
          <div id='ProductCardTop'>
              <p>{name}</p>
          </div>
          <div id='ProductCardBody'>
              <img src={pic} />
          </div>
        </div>
      </>
    );
  
}

ProductCard.defaultProps = {
  name: "name",
  pic: "https://picsum.photos/220/200",
}

export default ProductCard;