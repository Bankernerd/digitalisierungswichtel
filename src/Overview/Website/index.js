import React from 'react';

import foodShop from '../../assets/foodShop.png';
import nonFoodShop from '../../assets/nonFoodShop.png';

function Website(props) {
  const foodOrNot = () => {
    if (props.answered[1] === 0) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div className="website">
      <p>So könnte dein Webshop aussehen:</p>
      <img
        className="webshop-example"
        src={foodOrNot() ? foodShop : nonFoodShop}
        alt="Beispiel-Webshop"
      />
    </div>
  );
}

export default Website;
