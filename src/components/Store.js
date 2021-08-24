/* eslint-disable no-unreachable */
import { Component } from 'react'
import  products  from '../DisplayProducts/products'
import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';


  const prodData = products
  // let iconState = 'view_list'
 class Store extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      itemList: prodData,
      cardSwitchState: 'CardsView',
      done: true,
      iconState: 'view_list'
    }
    this.switchItems = this.switchItems.bind(this)
  }

  switchItems() {
    const itemList = prodData;
    if(this.state.done) {
      this.iconState = 'view_module'
    } else {
      this.iconState = 'view_list'
    }
    this.setState({itemList, cardSwitchState: this.state.done ? 'ListView' : 'CardsView' ,done: !this.state.done, iconState: this.iconState})
  }

  render() {
    return (
      <div className="mainContainer">
        <div className="iconContainer">
          <IconSwitch 
            icon={this.state.iconState}
            onSwitch={this.switchItems}
          />
        </div>
        <div className="cardContainer">
          <CardsView 
            id="CardsView"
            cards={prodData}
            className={this.state.cardSwitchState}
          />
          <ListView 
            id="ListView"
            cards={prodData}
            className={this.state.cardSwitchState}
          />
        </div>
      </div>
    )
  }
}



export default Store
