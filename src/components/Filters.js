import React from 'react'
import autoBind from 'react-autobind'

class Filters extends React.Component {
  constructor(props) {
    super(props)
    autoBind(this)
    this.state = {
      filters: [
        "All", "Active", "Completed"
      ],
      active: "All"
    }
  }

  render() {
    return (
      <div>
        Show: {this.state.filters.map((filter, index) => <div key={index}  style={{display: "inline-block", marginRight: 10}}>
          <Filter changeFilter={this.props.changeFilter} selectedFilter={this.props.selectedFilter} filter={filter}/>
        </div>)}
      </div>
    )
  }
}

export default Filters

class Filter extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    let decoratedFilter
    if (this.props.filter === this.props.selectedFilter) {
      decoratedFilter = (
        <div onClick={() => this.props.changeFilter(this.props.filter)} style={{
          color: "red"
        }}>
          {this.props.filter}
        </div>
      )
    } else {
      decoratedFilter = (
        <div onClick={() => this.props.changeFilter(this.props.filter)}>
          {this.props.filter}
        </div>
      )
    }
    return (decoratedFilter)
  }
}
