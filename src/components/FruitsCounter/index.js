// Write your code

import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {
    count1: 0,
    count2: 0,
  }

  nskn = () => {
    this.setState(prevstate => ({
      count1: prevstate.count1 + 1,
    }))
  }

  nsk = () => {
    this.setState(prevstate => ({
      count2: prevstate.count2 + 1,
    }))
  }

  render() {
    const {count1, count2} = this.state
    return (
      <div className="a">
        <div className="bb">
          <h1>
            Bob ate <span className="mango-count">{count1}</span> mangoes
            <span className="banana-count">{count2}</span> bananas
          </h1>
          <div className="ntr">
            <div className="kk">
              <img
                className="po"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button className="p" type="button" onClick={this.nskn}>
                Eat Mango
              </button>
            </div>
            <div className="kk">
              <img
                className="po"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button className="p" type="button" onClick={this.nsk}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
