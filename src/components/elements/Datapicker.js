import React, {useState} from 'react';
import {format} from "date-fns";
//Bootstrap
import { Modal} from 'react-bootstrap';
//icons
import calendar from "../../assets/icons/calendar.png"
//Style
import "./Datepicker.scss"
//Components
import Calendar from "../calendar/Calendar";

export default function Datepicker(props) {
  const { onChange, value, errors} = props

  const [open, setOpen] = useState(false)

  const openCalendar = () =>setOpen(!open)

  const changeDate = e => {
    onChange(e)
    setOpen(false)
  }

  return (
    <div className="form-calendar">
      <div class="input-group">
        <input 
          type="text" 
          value={value && format(
            value,
            'MM/DD/YYYY'
          )}
          class="form-control" 
          onClick={openCalendar}  
          placeholder="mm/dd/yyyy" 
          readOnly
          />
        <div class="icon input-group-btn" onClick={openCalendar}>
            <img src={calendar} alt="calendar" />
        </div>
      </div>
      {
          errors && errors["date"]?
          <p className="error">{errors["date"].message}</p>
          : null
      }
      <Modal show={open} onHide={openCalendar}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
        <Calendar selectDate={changeDate}/>
        </Modal.Body>
      </Modal> 
         
    </div>
  );
}
