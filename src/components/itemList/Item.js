import React from "react";
//Components
import Actions from "./Actions"
//Style
import "./Item.scss"

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
          <button type="button" className="btn btn-outline-dark" disabled>{item.status}</button>
        </td>
        <td><Actions item={item} /></td>
      </tr>
    );
}

export default Item;