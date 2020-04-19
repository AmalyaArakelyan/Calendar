import React from "react";
//Components
import Actions from "./Actions"
//Style
import "./Item.scss"
//Icons
import noCheck from "../../assets/icons/noCheck.png"
import check from "../../assets/icons/check.png"

function Item(props) {
    const {item} = props

    return (
      <tr className="item">
        <td>{item.id}</td>
        <td>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </td>
        <td>
          <p>
            {item.status}
            <img className="icon" src={item.status === "Incomplete" ? noCheck : check} alt="status" />
          </p>
        </td>
        <td><Actions item={item} /></td>
      </tr>
    );
}

export default Item;