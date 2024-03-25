import React from "react";
import "../css/programm.css";
import Registration from '../resources/assets/programm/роспись.png'
import Photo from '../resources/assets/programm/фотосессия.png'
import Restaurant from '../resources/assets/programm/ресторан.png'
import Cake from '../resources/assets/programm/торт.png'
import Firework from '../resources/assets/programm/фейерверк.png'

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
                    <img src={Photo}></img>
                    <img src={Restaurant}></img>
                    <img src={Cake}></img>
                    <img src={Firework}></img>
                </div>
                <div className="event">
                    <p>Роспись</p>
                    <p>Фотосессия</p>
                    <p>Ресторан</p>
                    <p>Торт</p>
                    <p>Конец вечера</p>
                </div>
                <div className="time">
                    <p>13:30</p>
                    <p>14:00</p>
                    <p>17:00</p>
                    <p>21:00</p>
                    <p>22:00</p>
                </div>
            </div>
        </div>
    )
  }
}




export default Programm