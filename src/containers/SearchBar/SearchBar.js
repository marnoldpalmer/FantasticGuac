import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";

import styled from "styled-components";


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
					placeholder = {this.state.controls.search.elementConfig.placeholder}
					value = {this.state.controls.search.value}
					onChange = {(event) => this.onChangeHandler(event, "search")}/>
				<Button clicked = {() => console.log("test")} text = {<FontAwesomeIcon icon = "map-marker-alt" />} geo = {this.props.geo}/>
			</div>
		)
	}
}

export default SearchBar;