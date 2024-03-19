import React from "react"
import Calendar from "./calendar"
import flowers from "../resources/assets/flowers-start.png"
import "../css/home.css"

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <img src={flowers} className="flowers-img"></img>
                <div className="content-container">
                    <div className="name welcome">Алексей</div>
                    <div className="and welcome">и</div>
                    <div className="name welcome">Варвара</div>
                    <div className="welcome">Дорогие гости!</div>
                    <div className="welcome">
                        С большой радостью приглашаем вас<br />
                        на наше свадебное торжество,<br />
                        которое состоится:
                    </div>
                    <Calendar className="calendar home"/>
                </div>
            </div>
        )
    }
}

export default Home