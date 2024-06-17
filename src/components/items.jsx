import React from "react";
import EachItem from "./each";
import './items.scss'
import { Oval } from "react-loader-spinner";


const Items = (prop) => {

  const func = prop.isLoading;

  return (
    <div className="items-container">
      {func ? <Oval color="green" ariaLabel="Loading" /> : 
      <div className="items_container">
        {prop.expenses.map((id) => {
          return <EachItem key = {id.id} info = {id} setItems = {prop.func}/>
        })}
      </div>}
    </div>
  )
}

export default Items