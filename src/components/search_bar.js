//neseccasry for every file
import React, {Component} from 'react';
// {Component} above equals to:
// const Component = React.Component;

//a functional component, input some argu output JSX
// const SearchBar = () => {
// 	return <input />;
// };

//use this one!!!
//a class-based component (ES6 class), use when you want have internal record keeping, 
//could aware what the user did
class SearchBar extends React.Component {
	
	//state: a plain javascript object that use for record and react to user events
	//when state changes, the component and its children components immediately re-renders	
	//all js classes have a special function constructor and will call automatically when the class is created
	constructor(props) {
		//
		super(props);

		//each class-based component has its own state object
		//make tern equals to the input value everytime when input changes
		//initalizing state
		this.state = {term: 'Lu'};

		//error: this is undefined in 'onInputChange' so add this line!!!
		//ES6 React.Component doesn't auto bind methods to itself. You need to bind them yourself in constructor. 
		//solved at https://stackoverflow.com/questions/33973648/react-this-is-undefined-inside-a-component-function
		this.onInputChange = this.onInputChange.bind(this);
	}

	//must have render, it is a function
	render() {
		//change event of input element!!
		//input re-render when state changes
		return (
			<div className="search-bar">
				<input 
				value = {this.state.term} 
				onChange={this.onInputChange} />
			</div>	
		);
	}

	//when input changes, trigger
	onInputChange(event) {
		const term = event.target.value;
		//to do: resarch on event object!!
		console.log(term);

		//update state, always use setState!!
		this.setState(
			{term: term}
		);
		
		this.props.onSearchTermChange(term);
	}



}

//export the component out
export default SearchBar;