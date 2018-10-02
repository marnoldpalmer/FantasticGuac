import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

//import Input from "../../components/UI/Input/Input";
//import Button from "../../components/UI/Button/Button";

import styled from "styled-components";


const Input = styled.input`
	display: inline-block;
	font-size: 24px;
	border-radius: 10px;
	width: 60%;
`

const Button = styled.button`
	background-color: Transparent;
	outline: none;
	border: none;
	color: red;
	cursor: pointer;
	font-size: 24px;
	display: inline-block;
	margin-left: -30px;
`

class SearchBar extends Component {
	state = {
		controls: {
			search: {
				elementType: "input",
				elementConfig: {
					type: "input",
					placeholder: "Search me Senpai"
				},
				value: "",
				validationRules: {
					required: false
				},
				valid: true,
			}
		}
	}

	onChangeHandler = (event, element) => {
		const value = event.target.value;
		this.setState({
			controls: {
			...this.state.controls,
				[element]: {
				...this.state.controls[element],
					value: value
				}
			}
		})
	}
	
	render() {
		return(
			<div>
				<Input 
					elementType = {this.state.controls.search.elementType}
					placeholder = {this.state.controls.search.elementConfig.placeholder}
					value = {this.state.controls.search.value}
					onChange = {(event) => this.onChangeHandler(event, "search")}/>
				<Button onClick = {() => console.log("test")} geo = {this.props.geo}><FontAwesomeIcon icon = "map-marker-alt" /></Button>
			</div>
		)
	}
}

export default SearchBar;