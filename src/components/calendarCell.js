import React from "react"
import heart from "../resources/assets/heart.svg"

const CalendarCell = (props) => {
    return (
        <td>
            { props.selectedDate ?  
            <div className="div-heart-icon">
                <iframe src={heart}></iframe>
                <div>4</div>
            </div>
            :
            <div>{ props.date != 0 ? props.date : "" }</div>
            }
        </td>
    )
}

export default CalendarCell