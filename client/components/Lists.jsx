import React from 'react'

import ListItem from './ListItem'

const List = (props) => {
  return (
    <div className='list'>
      <p className='welcome'>Welcome! Please enter text</p>
      {props.item.map(item => {
        return (
          <ListItem key={item.id} item={item} addToCart={props.addToCart} />
        )
      })}
    </div>
  )
}

export default List
