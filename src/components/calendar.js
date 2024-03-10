import React from "react";
import "../css/calendar.css";
import { weddingDate } from "../resources/constants";

class Calendar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            calendar: this.getCalendar()
        }
    }
    
    render() {
        return (
            <table className="calendar">
                <tr>
                    <td>пн</td>
                    <td>вт</td>
                    <td>ср</td>
                    <td>чт</td>
                    <td>пт</td>
                    <td>сб</td>
                    <td>вс</td>
                </tr>
                { this.state.calendar.map((row) => (
                    <tr>
                        { row.map((data) => (
                            <td>{data != 0 ? data : ''}</td>
                        ))}
                    </tr>
                ))}
            </table>
        )
    }

    // Создание матрицы месяца
    // Месяц берётся из constants.js
    getCalendar() {
        let calendar = [[]]
        const [day, month, year] = weddingDate.split(".")
        const daysCount = new Date(year, month, 0).getDate()
        // Нулевой день – воскресенье
        const firstDay = new Date(year, month, -daysCount + 1).getDay() - 1

        // Заполнение невходящих дней недели нулями
        for(let i = 0; i < firstDay; i++){
            calendar[0].push(0) 
        }

        // Первая неделя
        for(let i = firstDay, j = 1; i < 7; i++, j++){
            calendar[0].push(j)
        }

        // Все остальные недели
        calendar.push([])
        for(let i = 7 - firstDay + 1, j = 1; i <= daysCount; i++) {
            // Переход на новую неделю
            if (calendar[j].length >= 7) {
                j += 1
                calendar.push([])
            }
            calendar[j].push(i)
        }

        // Добиваем нулями
        const weeksCount = calendar.length
        for (let i = calendar[weeksCount - 1].length; i < 7; i++ ){
            calendar[weeksCount - 1].push(0)
        }

        return calendar
    }
}

export default Calendar