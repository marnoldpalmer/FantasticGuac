import React from "react";
import styled from "styled-components";

const button = (props) => {
	
	let Button = styled.button`
		
	`
	if (props.geo) {
		Button = styled.button`
			background-color: Transparent;
			outline: none;
			border: none;
			color: red;
			cursor: pointer;
			font-size: 24px;
			display: inline-block;
			margin-left: -30px;
		`
	} else {
		Button = styled.button`
			display: none;
		`
	}

	return(
		<Button onClick = {props.clicked}>{props.text}</Button>
	)
}

export default button;