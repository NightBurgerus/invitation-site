import React from "react"
import "../css/timer.css";
import { weddingDate } from "../resources/constants";

class Timer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counts: [0, 0, 0, 0],
            labels: ["", "", "", ""]
        }
       
        this.getCounts = this.getCounts.bind(this)
        this.formatLabels = this.formatLabels.bind(this)
        this.updateTimer = this.updateTimer.bind(this)
    }

    componentDidMount() {
        this.updateTimer()
    }

    render() {
        return (
            <div className="timer-container">
                <p>Будем счастливы<br /> разделить с вами <br />этот день <br /><br></br>через...</p>
                <div className="timer">
                    <div className="timer-numbers">
                        <p>{this.state.counts[0]}</p>
                        <p>{this.state.labels[0]}</p>
                    </div>
                    <div className="timer-numbers">
                        <p>{this.state.counts[1]}</p>
                        <p>{this.state.labels[1]}</p>
                    </div>
                    <div className="timer-numbers">
                        <p>{this.state.counts[2]}</p>
                        <p>{this.state.labels[2]}</p>
                    </div>
                    <div className="timer-numbers">
                        <p>{this.state.counts[3]}</p>
                        <p>{this.state.labels[3]}</p>
                    </div>
                </div>
            </div>)
    }

    updateTimer() {
        setTimeout(() => {
            this.getCounts()
            this.updateTimer()
        }, 1000)
    }

    // Высчитывает количетво дней, часов, минут и секунд
    getCounts() {
        const wedding = new Date(weddingDate)
        const now = new Date()
        const distance = Math.floor((wedding - now) / 1000)
        const days = Math.floor(distance / 60 / 60 / 24)
        const hours = Math.floor((distance - days * 24 * 60 * 60) / 60 / 60)
        const minutes = Math.floor((distance - days * 24 * 60 * 60 - hours * 60 * 60) / 60)
        const seconds = distance - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60
        const res = [days, hours, minutes, seconds]

        this.formatLabels(res)
    }

    // Высчитавает подписи к числам
    formatLabels(_counts) {
        let res = []

        res.push(this.formatData(["День", "Дня", "Дней"], _counts[0]))
        res.push(this.formatData(["Час", "Часа", "Часов"], _counts[1]))
        res.push(this.formatData(["Минуту", "Минуты", "Минут"], _counts[2]))
        res.push(this.formatData(["Секунду", "Секунды", "Секунд"], _counts[3]))

        this.setState({ counts: _counts, labels: res })
    }

    formatData(labels, value) {
        value = value 
        
        if (value % 10 == 1 && value != 11) {
            return labels[0]
        }

        if ((value >= 5 && value <= 20) || value % 10 >= 5 || value % 10 == 0) {
            return labels[2]
        }
        return labels[1]
    }
}


export default Timer