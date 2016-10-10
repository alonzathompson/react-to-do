//_.map function is taking this properties for todos and is using
//a es2015 arrow callback function that takes two parameters the 
//todo object and its index and it is using the spread operator to 
//basically say all the items in the object
import _ from 'lodash';
import React from 'react';
import TodosListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';

export default class TodosList extends React.Component {
	renderItems(){
		const props = _.omit(this.props, 'todos');

		return _.map(this.props.todos, (todo, index) => <TodosListItem key={index
		}{...todo} {...props}/>);

	}

	render(){
		console.log(this.props.todos);
		return (
			<table>
				<TodosListHeader />
				<tbody>
					{this.renderItems()}
				</tbody>
			</table>
		);
	}
}

