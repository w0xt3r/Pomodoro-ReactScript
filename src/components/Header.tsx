
import * as React from 'react';
import {Component} from 'react';

const style = require('./Header.scss');


export interface HeaderProps {
    title: string;
    subtitle: string;
}

export class Header extends Component<HeaderProps, {}> {

    public constructor(props?: HeaderProps, context?: any) {
        super(props, context);
    }

    public render(): JSX.Element {
        return (
            <div className={style.content} >

                <h1>{this.props.title}</h1>
                <p>{this.props.subtitle}</p>

            </div>
        );
    }
}
