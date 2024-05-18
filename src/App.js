import {useState} from "react"
import Header from "./components/header"
import './App.css'
import Items from "./components/items"
import Menu from "./components/menu"
import Modal from "./components/modal"
import './firebase'

const App = () => {
  const INITIAL_STATE = []
  
  const [itemData , setItemData] = useState(INITIAL_STATE)
  const [global, setGlobal] = useState(0)
  const [toggle, setToggle] = useState(false)
  const [totalNum , setTotalNum] = useState([])

  return (
    <div className='container'>
        {toggle &&  <Modal togg = {setToggle} nani = {itemData} total = {totalNum} whom = {setItemData} glob = {setGlobal}/> }
        <Header togg = {setToggle} val = {global}/>
        <div className="items-container">
          <Items/>
          <Menu  setItemData = {setItemData} adder = {setGlobal} tf = {setTotalNum}/>
        </div>
    </div>
  )
}

export default App

