import React from 'react';
//Icons
import noCheck from "../../assets/icons/noCheck.png"
import check from "../../assets/icons/check.png"
//Style
import "./ToDoItems.scss"

export default function ToDoItem(props) {
  const {selectedItems} = props
  return (
    <div className="show-todo">
          {selectedItems.map(item => {
              return <div className="title" key={item.id}>
                          <h4>{item.id} {item.title} </h4>
                          <img 
                            src={item.status === "Incomplete" ? noCheck : check } 
                            alt="Incomplete"
                          />
                      </div>
          })}
      </div>
  );
}
