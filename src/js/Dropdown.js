import React from 'react';
import { Link } from 'react-router';

export default class Dropdown extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            hover: false
        };

        this.mouseEnter = this.mouseEnter.bind(this);
        this.mouseLeave = this.mouseLeave.bind(this);

    }

    mouseEnter(){
        this.setState({ hover: true });
    }

    mouseLeave(){
        this.setState({ hover: false });
    }

    render(){
        return (
            <span onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} style={this._getStyles().dropdown}>
                <span>Dropdown</span>
                <span style={this._getDropdownStyles()}>
                    <p>
                        <Link to='/' onlyActiveOnIndex={true}>Home</Link>
                    </p>
                    <p>
                        <Link to='/about'>About</Link>
                    </p>
                    <p>
                        <Link to='/contact'>Contact</Link>
                    </p>
                </span>
            </span>
        );
    }

    _getStyles(){

        return {
            dropdown: {
                position: 'relative',
                display: 'inlineBlock',

            },

            dropdownContent: {
                display: 'none',
                position: 'absolute',
                backgroundColor: '#f9f9f9',
                minWidth: '160px',
                boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
                padding: '12px 16px'
            }
        };

    }

    _getDropdownStyles(){

        return this.state.hover ?
        (Object.assign({}, this._getStyles().dropdownContent, {display: 'block'})) :
        (Object.assign({}, this._getStyles().dropdownContent));

    }

}
