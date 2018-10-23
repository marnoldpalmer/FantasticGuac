import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import styled from "styled-components";


class ListContainer extends Component {

  state = {
		controls: {
			hidden: "false",
      title: "I Am The Best Boy",
      background: "https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
		}
	}

	onClickHandler = (index) => {

  }

	render() {
		return(
			<div>
				//Something Will Go Here
			</div>
		)
	}
}

export default ListContainer;
