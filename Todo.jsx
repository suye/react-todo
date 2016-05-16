var React = require("react");
var TypeView = require("./TypeView.jsx");
var ListTodo = require("./ListTodo.jsx");
var Todo = React.createClass({
	getInitialState: function(){
		return{
			list:[]
		};
	},
	handleAdd: function(rows){
		this.setState({list:rows});
	},
	handleDel: function(id){
		
		var array = this.state.list;
		array.splice(id,1);

		this.setState({list:array});
	},
	handleEdit: function(val,id){
		var array = this.state.list;
		array.splice(id,1,val);

		this.setState({list:array});
	},
	render: function(){
		
		return(
			<div>
				<TypeView add={this.handleAdd} todos={this.state.list}/>
				<ListTodo list={this.state.list} del={this.handleDel} edit={this.handleEdit}/>
			</div>
		)
	}
});
module.exports = Todo;