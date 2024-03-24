import React from "react";
import "../css/wishes.css";
import Color1 from '../resources/assets/wishes/Ellipse 11.png'
import Color2 from '../resources/assets/wishes/Ellipse 12.png'
import Color3 from '../resources/assets/wishes/Ellipse 13.png'
import Color4 from '../resources/assets/wishes/Ellipse 14.png'
import Color5 from '../resources/assets/wishes/Ellipse 15.png'
import Color6 from '../resources/assets/wishes/Ellipse 16.png'



class Wishes extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
        <div className="wishes-main-container">
            <div className="wishes-children-container">
                <div className="wishes">
                    <h1>Пожелания</h1>
                    <p>
                    Не ломайте голову над подарками.<br></br>
                    Ваши пожелания в конвертах помогут нам<br></br>
                    осуществить нашу мечту о свадебном путешествии<br></br>
                    </p>
                </div>
                <div className="dress-code">
                    <h1>Дресс код</h1>
                    <p>
                    Мы очень старались сделать праздник красивым<br></br>
                    и будем рады, если в своих нарядах<br></br>
                    вы поддержите цветовую гамму нашей свадьбы<br></br>
                    </p>
                </div>
                <div className="dress-code-colors">
                    <img src={Color1}></img>
                    <img src={Color2}></img>
                    <img src={Color3}></img>
                    <img src={Color4}></img>
                    <img src={Color5}></img>
                    <img src={Color6}></img>
                </div>
            </div>
        </div>
    )
  }
}




export default Wishes