import React, { useState , useEffect} from "react"
import './modal.css'
import { collection, addDoc} from "firebase/firestore"; 
import { dataStore } from "../firebase"


const Modal = (props) => {
  const [name , setName] = useState('')
  const [errorPopUp , setErrorPopUp] = useState()
  
  const [fuckinTotal, setFuckingTotal] = useState(0);

  useEffect(() => {
    let total = 0;
  
    props.nani.forEach(amount => {
       total += amount.amount * amount.price;
    });
  
    setFuckingTotal(total);
  
  }, [props.nani]);




  const toggleHandler = () => {
    props.togg(prev => !prev)
  }

  const upDataObjectFunction = (id, val) => {
    
    const newArray = props.nani.map(obj => 
      obj.id === id ? {...obj, amount : val + 1} : obj
    )

    if(val === 0){
      const indexToDelete = props.nani.findIndex(obj => obj.id === id);
      if(indexToDelete !== -1){
        newArray.splice(indexToDelete, 1)
        props.whom(newArray)
      }
    }else {
      props.whom(newArray)
    }

  }

  const updateOBjectNegative = (id , val) => {

    props.glob(val)

    const newArray = props.nani.map(obj => 
      obj.id === id ? {...obj, amount : val} : obj
    )

    if(val <= 0){
      props.whom(prevArray => prevArray.filter(obj => obj.id !== id));
    }else {
      props.whom(newArray);
    }
  }


  const nameChangeHandler = (e) => {
    const inputName = e.target.value
    setName(inputName)
  }

    const createDataBase = async () => {
      const arr = props.nani
      const finalDataFormat = {
        name : name,
        totalExpense : fuckinTotal,
        fuckingExpense : arr
      }
      try {
        if(name.length > 3 && arr.length > 0){
          const docRef = await addDoc(collection(dataStore, "users"),finalDataFormat);
          console.log("Document written with ID: ", docRef.id);
          props.nani.splice(0, props.nani.length)
          setErrorPopUp(true)
          setName('')
          setFuckingTotal(0)
          props.glob(0)
        }else {
          console.log('invalid!!')
          setErrorPopUp(false)
        }
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }


  return (
    <div className="modal-container">
      <div className="another-container">
        <div className="buttom-container">
            <div className="total-amount">
                <div style={{display : 'flex', flexDirection : 'row', gap : '20px'}}>
                  <p>Total Amount : </p>
                  <p>${fuckinTotal.toFixed(2)}</p>
                </div>
                <div> 
                  <label style={{color : '#081684'}}>Your Name : </label>
                  <input type="text"
                  value={name} 
                  onChange={nameChangeHandler}
                  className="input-section"/>
                </div>
            </div>
            <div className="buttons">
              <button className="close-button" onClick={toggleHandler}>Close</button>
              <button className="order-button" onClick={createDataBase}>Order</button>
              {errorPopUp ?  <p className="grid">Your order has been submitted successfully ! </p> : 
               <p className="grid">Order at least one item or Enter a valid name!!</p>}
            </div>
        </div>
        <div className="content-con">
          {props.nani.length > 0 ? '' : <h2 style={{color : "#ee82ee"}}>too bad nothing here order somthing!</h2>}
          {props.nani.map((items) => {
            if(items.amount === 0){
              return '';
            }else {
              return <div className="ordered-items" key = {items.id}>
                <div className="left">
                  <p>Ordered food : {items.food}</p>
                  <p>Price : {items.price}</p>
                  <p>Amount : {items.amount}</p>
                </div>
                <div className="right">
                  <button onClick={() => updateOBjectNegative(items.id, items.amount - 1)}>-</button>
                  <button onClick={() => upDataObjectFunction(items.id, items.amount)}>+</button>
                </div>
              </div>
            }
          })}
          </div>
        </div>
      </div>
  )
}


export default Modal