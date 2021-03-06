import React, { useState } from "react";
import * as dateFns from "date-fns";
import './Calendar.scss'
//Components
import ToDoItems from "./ToDoItems"

const Calendar = (props) => {
    const {selected, selectDate} = props
    const [selectedDate, setSelectedDate] = useState(new Date());

    const currentDate = dateFns.format(new Date(), "MM") === "04" ? new Date() : new Date("04/01/2020")

    const header = () => {
        const dateFormat = "MMMM YYYY";
        return (
            <div className="header row flex-middle">
                <div className="column col-center">
                    <span>{dateFns.format(currentDate, dateFormat)}</span>
                </div>
            </div>
        );
    };

    const days = () => {

        const dateFormat = "ddd";
        const days = [];

        let startDate = dateFns.startOfWeek(currentDate);
            for (let i = 0; i < 7; i++) {
                days.push(
                    <div className="column col-center" key={i}>
                    {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
                    </div>
                );
            }
        return <div className="days row">{days}</div>;
    };

    const cellsWithTodo = ()  => {
        
        const monthStart = dateFns.startOfMonth(currentDate);
        const monthEnd = dateFns.endOfMonth(monthStart);
        const startDate = dateFns.startOfWeek(monthStart);
        const endDate = dateFns.endOfWeek(monthEnd);
        const dateFormat = "D";
        const rows = [];

        let days = [];
        let day = startDate;
        let formattedDate = "";
        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                formattedDate = dateFns.format(day, dateFormat);
                const dayAndManth = dateFns.format(day, "MM/D")
                const cloneDay = day;
                days.push( 
                    <div 
                        className={`column cell 
                        ${!dateFns.isSameMonth(day, monthStart)
                        ? "disabled" : dateFns.isSameDay(day, selectedDate) 
                        ? "active-cell" : selected[dayAndManth]
                        ? "selected"  : ""}`} 
                        key={day} 
                        onClick={() => onDateClick(dateFns.parse(cloneDay))}
                        > 
                            <span className="number">{formattedDate}</span>
                            <span className="bg">{formattedDate}</span>
                            {selected[dayAndManth] && <ToDoItems selectedItems={selected[dayAndManth]} /> }
                    </div>
                );
                day = dateFns.addDays(day, 1);
            }
        rows.push(
            <div className="row" key={day}> {days} </div>
            );
        days = [];
        }

        return <div className="body">{rows}</div>;
        
    }

    const cells = () => {
        const monthStart = dateFns.startOfMonth(currentDate);
        const monthEnd = dateFns.endOfMonth(monthStart);
        const startDate = dateFns.startOfWeek(monthStart);
        const endDate = dateFns.endOfWeek(monthEnd);
        const dateFormat = "D";
        const rows = [];

        let days = [];
        let day = startDate;
        let formattedDate = "";
        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                formattedDate = dateFns.format(day, dateFormat);
                const cloneDay = day;
            days.push(
                <div 
                className={`column small cell 
                ${!dateFns.isSameMonth(day, monthStart)
                ? "disabled" : dateFns.isSameDay(day, selectedDate) 
                ? "selected" : "" }`} 
                key={day} 
                onClick={() => onDateClick(dateFns.parse(cloneDay))}
                > 
                    <span className="number">{formattedDate}</span>
                    <span className="bg">{formattedDate}</span>
                </div>
            );
            day = dateFns.addDays(day, 1);
        }

        rows.push(
            <div className="row" key={day}> {days} </div>
            );
        days = [];
        }

        return <div className="body">{rows}</div>;
        
    }



    const onDateClick = day => {
        setSelectedDate(day);
        selectDate(day)
    }

    return (
        <div className="calendar">
            <div>{header()}</div>
            <div>{days()}</div>
            <div>{selected ? cellsWithTodo() : cells()}</div>
        </div>
    );
};
export default Calendar;