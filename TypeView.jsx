var React = require("react");
var Todo = React.createClass({
	handleClick: function(event){
		var val = this.refs.txt.value;
		var todos = this.props.todos;
		todos.push(val);
		this.props.add(todos);
		this.refs.txt.value = "";
		
	},
	render: function(){
		
		return(
			<form action="">
				<input type="text" name="" id="txt" ref="txt"/>
				<input type="button" value="Submit" className="submit_btn" onClick={this.handleClick}/>
			</form>
		)
	}
});
module.exports = Todo;