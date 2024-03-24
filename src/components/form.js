import React, { useState } from "react";
import "../css/form.css";


class Form extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
        <div className="form-main-container">
            <div className="form-children-container">
                <h1>Анкета</h1>
                <p>Пожалуйста, ответьте на несколько<br></br>
                вопросов, которые мы для вас приготовили</p>
            </div>
            <Formmm></Formmm>
        </div>
    )
  }
}


function Formmm() {
    const [formData,setFormData] = useState({isAgree:false,name:"Yes"})
    const handleChange=event=>{
        const target=event.target
        const name=target.name
        const value=target.type==="checkbox" ? target.checked : target.value
        setFormData({
            ...formData,
            [name]:value
    })
    }
    return(
        <form>
            <div className="form">
                <div className="question1">
                    <p>Сможете ли Вы присутствовать на мероприятии?</p>
                    <label><input type="radio" name="presence" value="Yes" onChange={handleChange} checked={formData.presence==="Yes"}/>Я приду / мы придем</label>
                    <label><input type="radio" name="presence" value="No" onChange={handleChange} checked={formData.presence==="No"}/>К сожалению, не получится прийти</label>
                    <label><input type="radio" name="presence" value="Later" onChange={handleChange} checked={formData.presence==="Later"}/>Смогу ответить чуть позже</label>
                </div>
                <div className="question2">
                    <p>Ваши предпочтения по напиткам<br></br>(можно выбрать несколько вариантов)</p>
                    <label><input type="radio" name="drink" value="1" onChange={handleChange} checked={formData.drink==="1"}/>Шампанское</label>
                    <label><input type="radio" name="drink" value="2" onChange={handleChange} checked={formData.drink==="2"}/>Белое вино</label>
                    <label><input type="radio" name="drink" value="3" onChange={handleChange} checked={formData.drink==="3"}/>Красное вино</label>
                    <label><input type="radio" name="drink" value="4" onChange={handleChange} checked={formData.drink==="4"}/>Водка</label>
                    <label><input type="radio" name="drink" value="5" onChange={handleChange} checked={formData.drink==="5"}/>Виски</label>
                    <label><input type="radio" name="drink" value="6" onChange={handleChange} checked={formData.drink==="6"}/>Коньяк</label>
                    <label><input type="radio" name="drink" value="7" onChange={handleChange} checked={formData.drink==="7"}/>Безалкогольные напитки</label>
                </div>
                <div className="question3">
                    <p>Какому блюду Вы отдаете предпочтение?</p>
                    <label><input type="radio" name="dish" value="meat" onChange={handleChange} checked={formData.dish==="meat"}/>Блюдо из мяса</label>
                    <label><input type="radio" name="dish" value="fish" onChange={handleChange} checked={formData.dish==="fish"}/>Блюдо из рыбы</label>
                </div>
            </div>
        </form>
    )
 }

export default Form