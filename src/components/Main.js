import React from "react";
import "./../styles/Main.scss";

function Main() {
    return (
        <div className="Main">
            <form name="dataOutputSettings" className="UserForm">
                <div>
                    <label htmlFor="indexCode" className="FormLabel_FormInputText">Код индекса</label>
                </div>
                <div>
                    <input id="indexCode" name="indexCode" className="FormInputText"></input>
                </div>
                <div>
                    <label htmlFor="startDate" className="FormLabel_FormInputStartDate">С</label>
                    <input id="startDate" name="startDate" type="date" className="FormInputDate"></input>
                </div>
                <div>
                    <label htmlFor="endDate" className="FormLabel_FormInputEndDate">По</label>
                    <input id="endDate" name="endDate" type="date" className="FormInputDate"></input>
                </div>
                <div>
                    <label htmlFor="percentage" className="FormLabel_FormInputText">Процент для рассчета<br></br>снижения</label>
                </div>
                <div>
                    <input id="percentage" name="percentage" className="FormInputText"></input>
                </div>
                <div>
                    <button id="calculate" name="сalculate" className="FormButton">Рассчитать</button>
                </div>
            </form>
        </div>
    )
}

export default Main