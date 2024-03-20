import React from "react";
import "../css/contacts.css";
import Husband from '../resources/assets/contacts/husband.png'
import Bride from '../resources/assets/contacts/bride.png'


class Contacts extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
        <div className="contacts-main-container">
            <div>
            <h1>Контакты</h1>
            </div>
            <div className="contacts-children-container">
                <div className="husband">
                    <div className="husband-contact">
                        <p>ЖЕНИХ</p>
                        <p>+7 920 999 99 99</p>
                    </div>
                    <div className="husband-picture">
                        <img src={Husband}></img>
                    </div>
                </div>
                <div className="bride">
                    <div className="bride-contact">
                        <div className="bride-picture">
                            <img src={Bride}></img>
                        </div>
                        <p>НЕВЕСТА</p>
                        <p>+7 920 999 99 99</p>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}


export default Contacts