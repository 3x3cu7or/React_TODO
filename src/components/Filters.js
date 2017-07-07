import React from 'react'
import autoBind from 'react-autobind'
import Filter from './Filter.js';

class Filters extends React.Component {
  constructor(props) {
    super(props)
    autoBind(this)
  }

  render() {
    const filters = ["All", "Active", "Completed"]
    const {changeFilter, selectedFilter} = this.props;
    return (
      <div>
        Show: {filters.map((filter, index) => <div key={index} style={{
          display: "inline-block",
          marginRight: 10
        }}>
          <Filter
            changeFilter={changeFilter}
            selectedFilter={selectedFilter}
            filter={filter}
          />
        </div>)}
      </div>
    )
  }
}

export default Filters
