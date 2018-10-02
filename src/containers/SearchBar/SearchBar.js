import React, {Component} from "react";

import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

class SearchBar extends Component {

	state = {
		controls: {
			elementType: "input",
			elementConfig: {
				type: "input",
				placeholder: "Search me Senpai"
			},
			value: "",
			validationRules: {
				required: true
			},
			valid: false,
			touched: false
		}
	}


	render() {
		return(
			<div>

			</div>
		)
	}
}
export default SearchBar;