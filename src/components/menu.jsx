import React from 'react';
import './menu.css';
import MenuContent from './menuContent';
import {motion} from 'framer-motion'


const Menu = (prop) => {

  const menu = [
    {
      id: 1,
      foodName: 'Sushi',
      des: 'finest fish and veggies',
      price: 22.99,
      input : 'nani'
    },
    {
      id: 2,
      foodName: 'schnitzel',
      des: 'A German specialty',
      price: 16.50,
      nani : 'nani2'
    },
    {
      id: 3,
      foodName: 'Barbecue Burger',
      des: 'American, Raw, meaty',
      price: 12.88,
      nani : "nani2"
    },
    {
      id: 4,
      foodName: 'Green Bowl',
      des: 'healthy... and green',
      price: 19.99,
      nani : 'nani3'
    },
    {
      id: 5,
      foodName: 'ashak',
      des: 'An Afghan food',
      price: 10.99,
      nani : 'naniNIiger'
    }
  ];

  const variants = {
    initial : {
      opacity : 0,
      y : '10%'
    },
    animate : {
      opacity : 1,
      y : '0%',
      transition : {
        duration : 2
      }
    }
  }

  return (
    <motion.div className='menu-container' variants={variants} initial = {'initial'} animate = {'animate'}>
          {menu.map((items) => {
            return <MenuContent key = {items.id} FN = {items.foodName} price = {items.price}
            des = {items.des} classN = {items.nani} onAddItem = {prop.setItemData} setGlobal = {prop.adder} 
            setTotalNum = {prop.tf} inputVal = {prop.value}  setInputVal = {prop.inputVal}/>
          })}
    </motion.div>
  );
};

export default Menu;
