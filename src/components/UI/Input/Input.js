import React from "react";
import styled from "styled-components";

const input = (props) => {
	
	const Input = styled.input`
		display: inline-block;
		font-size: 24px;
		border-radius: 10px;
		width: 60%;
	`
	
	return(
		<Input {...props.config} value = {props.value} onChange = {props.changed}/>
	)
}

export default input;