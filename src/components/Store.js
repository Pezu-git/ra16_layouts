/* eslint-disable no-unreachable */

import propTypes from 'prop-types'
import { Component } from 'react'
import  products  from '../DisplayProducts/products'
import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';


  const prodData = products
  let iconState = 'view_list'

 class Store extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      itemList: prodData,
      cardSwitchState: 'CardsView',
      done: true
    }
    this.switchItems = this.switchItems.bind(this)
  }

  

  switchItems(event) {
    console.log(event.target)
    const itemList = prodData;
    if(this.state.done) {
      iconState = 'view_module'
    } else {
      iconState = 'view_list'
    }
    this.setState({itemList, cardSwitchState: this.state.done ? 'ListView' : 'CardsView' ,done: !this.state.done})
  }

  render() {
    const newCardState = this.state.cardSwitchState
    console.log(newCardState)
    return (
      <div className='mainContainer'>
        <div className='iconContainer'>
          <IconSwitch 
            
            icon={iconState}
            onSwitch={this.switchItems}
          />
        </div>
        <div className='cardContainer'>
          <CardsView 
            id='CardsView'
            cards={prodData}
            className={this.state.cardSwitchState}
            />
            <ListView 
            id='ListView'
            cards={prodData}
            className={this.state.cardSwitchState}
            />
        </div>
      </div>
    )
  }
}

export default Store
