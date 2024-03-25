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
                    Будем благодарны, если вы воздержитесь от криков “Горько” на празднике,<br></br> 
                    ведь поцелуй - знак выражения чувств, он не может быть по заказу
                    </p>
                    <p>
                    Не ломайте голову над подарками.Ваши пожелания в конвертах <br></br>
                    помогут нам осуществить нашу мечту о свадебном путешествии
                    </p>
                    <p>
                    Если Вы хотите подарить нам цветы, то лучше добавьте <br></br> 
                    в конверт ту сумму, которую Вы потратили бы на них
                    </p>
                </div>
                <div className="dress-code">
                    <h1>Дресс код</h1>
                    <p>
                    Мы очень старались сделать праздник красивым и будем рады,<br></br>
                    если в своих нарядах вы поддержите цветовую гамму нашей свадьбы
                    </p>
                    <p>
                    Дорогие мужчины, вам не обязательно полностью<br></br>
                    одеваться в цветовую палитру.<br></br>
                    Достаточно будет одного элемента в одежде<br></br>
                    по желанию: бабочка, галстук и тп.
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