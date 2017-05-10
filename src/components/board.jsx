import React from 'react'
import List from './list'

export default class Board extends React.Component {
  constructor(props) {
    super(props)

    let store  = this.props.store
    this.state = store.getState()
    store.subscribe(() => { this.setState(store.getState()) })
  }

  render() {
    let lists
    let state = this.props.store.getState()

    if(state.lists) {
      lists = Object.entries(state.lists).map((entry) => {
        let id   = parseInt(entry[0])
        let list = entry[1]

        return <List
          listId={ id }
          key={ id }
          store={ this.props.store }
        />
      })
    } else {
      lists = []
    }

    return (
      <div className="Board">
        <h1 className="Board__title">Trellis</h1>
        <div className="Board__lists">
          { lists }
        </div>
      </div>
    )
  }
}
