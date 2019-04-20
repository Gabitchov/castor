import * as React from 'react';
import {Badge} from 'reactstrap';

export interface HelloProps { compiler: string; framework: string; }

export class Hello extends React.Component{

    constructor(public props:HelloProps){
        super(props);
    }

    render(){
        return  <div><h1>Hello from {this.props.compiler} and {this.props.framework} </h1><Badge  >Click on it</Badge></div>;
    }
}