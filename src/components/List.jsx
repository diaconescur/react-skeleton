var React = require('react');
var ListItem = require('./ListItem.jsx');

var ingredients = [{"id":1,"text":"aaa"},{"id":2,"text":"bbbb"},{"id":3,"text":"cccc"}];
var List = React.createClass({
  render: function(){
      var listItems = ingredients.map(
          function(item){
            return <ListItem key={item.id} ingredient={item.text}/>;
          }

      );
      return (<ul>{listItems}</ul>);
  }
});

module.exports = List;
