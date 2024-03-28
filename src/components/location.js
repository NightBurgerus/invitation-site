import React from "react";
import "../css/location.css";
import Flowers from '../resources/assets/location/flowers-place.png'
import Vector from '../resources/assets/location/Vector 1.png'


class Location extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className="location-main-container">
        <h1>Место проведения</h1>
        <div className="location-children-container">
          <img src={Flowers} id="flower"></img>
          <div className="address">
            <div className="address_without_button">
              <h1>Роспись:</h1>
              <p>Дворец Бракосочетания <br></br>
                г. Владимир, ул. Растопчина, 51</p>
              <h1>Ресторан:</h1>
              <p>АМАКС Золотое кольцо<br></br>
                ул. Чайковского, 27, Владимир
              </p>
            </div>
            <MyButton></MyButton>
          </div>
        </div>
      </div>
      
    )
  }
}
function MyButton() {
  function handleClick() {
    var location = document.createElement('a');
    location.href = 'https://yandex.ru/maps/-/CDR4MEYQ';
    location.target="_blank";
    location.click();
  }
  return <button className="map_button" type="button" onClick={handleClick}>
    Посмотреть <br></br>
    на карте <br></br>
    <div className="image">
    <img src={Vector}></img>
    </div>
    </button>
}



export default Location