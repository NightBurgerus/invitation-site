import React from "react";
import "../css/programm.css";
import Registration from '../resources/assets/programm/роспись.png'
import Buffet from '../resources/assets/programm/фуршет.png'
import Restaurant from '../resources/assets/programm/ресторан.png'
import Cake from '../resources/assets/programm/торт.png'
import Transfer from '../resources/assets/programm/трансфер.png'

class Programm extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
        <div className="programm-main-container">
            <h1>Программа</h1>
            <div className="children-container">
                <div className="icons">
                    <img src={Registration}></img>
                    <img src={Buffet}></img>
                    <img src={Restaurant}></img>
                    <img src={Cake}></img>
                    <img src={Transfer}></img>
                </div>
                <div className="event">
                    <p>Роспись</p>
                    <p>Фуршет</p>
                    <p>Ресторан</p>
                    <p>Торт</p>
                    <p>Трансфер</p>
                </div>
                <div className="time">
                    <p>12:00</p>
                    <p>12:00</p>
                    <p>12:00</p>
                    <p>12:00</p>
                    <p>12:00</p>
                </div>
            </div>
        </div>
    )
  }
}




export default Programm