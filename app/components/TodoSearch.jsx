var React = require('react');

var TodoSearch =React.createClass({

  handleSearch: function(){
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;

    this.props.onSearch(showCompleted, searchText);
  },

  render: function() {
      return (
          <div>
            <input type= "search" ref="searchText" placeholder="Search todos" onChange={this.handleSearch}/>
            <div>
              <label>
              <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
              show completed todo
              </label>
            </div>
          </div>

      )
  }
});

module.exports = TodoSearch;
