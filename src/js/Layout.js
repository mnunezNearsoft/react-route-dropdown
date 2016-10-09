import React from 'react';
import Dropdown from './Dropdown';

export default class Layout extends React.Component{

    render(){
        return (
            <div>
                <Dropdown />
                {this.props.children}
            </div>
        );
    }

}
