var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
  render: function (){
      var {id , text, completed, createdAt, completedAt } = this.props;
      var renderDate =() =>{
        var message = 'created ';
        var timeStamp = createdAt;

        if (completed){
          message = 'Completed at ';
          timeStamp = completedAt;
        }

        return message + moment.unix(timeStamp).format('D/MM/YYYY @ H:mm A');
      };
      return(
        <div onClick={()=>{
            this.props.onToggle(id);
          }}>
          <input type="checkbox" checked={completed}/>
          <p>{text}</p>
          <p>{renderDate()}</p>
        </div>
      )
  }
});

module.exports = Todo;
