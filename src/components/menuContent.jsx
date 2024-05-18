import React , {useState}from 'react'
import './menuContet.css'

const MenuContent = (props) => {  
  const [inputVal , setInputVal] = useState(0)

  const someFunc = (e) => {
    const newInput = e.target.value 
    setInputVal(Number(newInput))
  }
  const adder = (e) => {
    e.preventDefault()  
    props.setGlobal(prev => prev + inputVal)

    if(inputVal > 0){
      props.onAddItem(prev => ([...prev, {id : Math.random().toFixed(5),food : props.FN, price : props.price, 
        amount : inputVal}]))
    }else {
      return
    }
  }

  return (
    <form className='food-info-container'>
      <div className='left-section'>
        <p style={{
          fontWeight : '800',
          fontSize : '20px'
        }}>{props.FN}</p>
        <p style={{
          fontStyle : 'italic'
        }}>{props.des}</p>
        <p style={{
          fontWeight : '800'
        }}>$ {props.price}</p>
      </div>
      <div className='right-section'>
        <div className='amount-container'>
          <label htmlFor="">Amount</label>
          <input type="number" min={0} max={10} placeholder={0} value={inputVal} onChange={someFunc}/>
        </div>
        <button className='add-button' onClick={adder}>
          +Add
        </button>
      </div>
    </form>
  )

}

export default MenuContent