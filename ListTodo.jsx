var React = require("react");
var Todo = React.createClass({
	getInitialState: function(){
		return{
			list:this.props.list
		}
	},
	handleClick: function(event){
		var id = event.target.id;
		this.props.del(id);
	},
	handleChange: function(event){
		var id = event.target.id;
		this.props.edit(event.target.value,id);
		
	},
	render: function(){
		var list = [];
		var that = this;
		$(this.props.list).each(function(index){
			list.push(
				<li key={index}>
				<input type="text" name="" id={index} value={this} onChange={that.handleChange} ref="contents"/>
				&nbsp;<input type="button" value="delete" id={index} onClick={that.handleClick}/>
				</li>
			)
		});
		return(
			<div>
				<ul>
					{list}
				</ul>
			</div>
		)
	}
});
module.exports = Todo;