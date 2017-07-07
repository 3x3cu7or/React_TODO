import React from 'react'

const Filter = ({ changeFilter, selectedFilter, filter }) => {
    if (filter === selectedFilter) {
        return (
          <div onClick={() => changeFilter(filter)} style={{
            color: "red"
          }}>
            {filter}
          </div>
        )
    }
    return (
        <div onClick={() => changeFilter(filter)}>
          {filter}
        </div>
      )
  }
export default Filter;
