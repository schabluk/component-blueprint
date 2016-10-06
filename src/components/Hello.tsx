import * as React from 'react';
import {Button} from './Button.jsx';
import './Hello.css';

interface IHelloProps { name: string; }

export default class Hello extends React.Component<IHelloProps, {}> {
  public render(): any {
    return <h3>Hello {this.props.name}! <Button text='OK' /></h3>;
  }
}
