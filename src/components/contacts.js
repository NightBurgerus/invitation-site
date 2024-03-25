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
                        <p>ЖЕНИХ:</p>
                        <p>+7 910 183 03 68</p>
                    </div>
                    <div className="husband-picture">
                        <img src={Husband}></img>
                    </div>
                </div>
                <div className="bride">
                    <div className="bride-picture">
                        <img src={Bride}></img>
                    </div>
                    <div className="bride-contact">
                        <p>НЕВЕСТА:</p>
                        <p>+7 910 097 78 47</p>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}


export default Contacts