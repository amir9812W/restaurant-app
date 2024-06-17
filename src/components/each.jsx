import React, { useState } from 'react'
import './each.scss'
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '../firebase'


const EachItem = (prop) => {
  const [show , setShow] = useState(false)
  const deleteData = async(id) =>{
    try {
      await deleteDoc(doc(db, 'users', id));
      prop.setItem((prevData) => prevData.filter((item) => item.id !== id));
    }catch (error){
      console.log(error)
    }
  }

  const name = prop.info.data.name
  const total= prop.info.data.totalExpense
  const list = prop.info.data.fuckingExpense


  return (
    <div className='content' key = {prop.info.id} onClick={() =>setShow(prev => !prev)}>
      <div className='left-section'>
        <p>Name : {name}</p>
        <p>Total Expense : {total}</p>
      </div>
      <button onClick={() => deleteData(prop.info.id)}>delete</button>
      {show && 
      <div className='modal' >
        <div className='container'>
          <div className='up-section'>
            <h1>Name : {prop.info.data.name}</h1>  
            <h1>Total : {prop.info.data.totalExpense}$</h1>  
          </div>
          <div className='cont'>
            <div className='list-of-items'>
              {list.map((data) => {
                return (
                  <div className='information' key = {data.id}>
                    <p>Food : {data.food}</p>
                    <p>Amount : {data.amount}</p>
                    <p>price : {data.price}</p>
                  </div>
                )
            })}
            </div>
          </div>
        </div>
      </div>}
    </div>
  )
}

export default EachItem
