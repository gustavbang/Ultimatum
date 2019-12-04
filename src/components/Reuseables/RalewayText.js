import React from 'react'
import styled, { css } from 'styled-components'



const MyText = styled.p`
	color: ${props=>props.color || 'white'};
	line-height: 1.6;
	font-family: 'Raleway';
	
	font-size: ${props => props.fontSize || 1.2}em;
	
	${props => props.bold && css`
		font-weight: 700;
	`};
	
	margin: ${props => props.margin || 0}px;

	
	width: ${props => props.width}px;

`

class RalewayText extends React.Component {
    render() {
        return(
            <MyText bold={this.props.bold} color={this.props.color} fontSize={this.props.fontSize} margin={this.props.margin} style={this.props.style} children={this.props.children} width={this.props.width}/>
        )
    }
}

export default RalewayText