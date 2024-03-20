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
              <h1>Фуршет и ресторан:</h1>
              <p>р-н “Полли” <br></br>
                г. Владимир, Октябрьский пр., д. 7 </p>
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
    location.href = 'https://yandex.ru/maps/org/polli/40381122075/?azimuth=5.497787143782138&ll=40.392890%2C56.129102&z=17.89';
    location.target="_blank";
    location.click();
  }
  return <button className="map_button" type="button" onClick={handleClick}>
    Посмотреть <br></br>
    на карте <br></br>
    <img src={Vector}></img>
    </button>
}



export default Location