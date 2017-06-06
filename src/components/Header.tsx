
import * as React from 'react';
import {Component} from 'react';

export interface HeaderProps {
    title: string;
    subtitle: string;
}

export class Header extends Component<HeaderProps, {}> {

    public constructor(props?: HeaderProps, context?: any) {
        super(props, context);
        console.log('[G] props - Header', props);
    }

    public render(): JSX.Element {
        return (
            <div style={headerStyle}>
                <h1>{this.props.title}</h1>
                <p>{this.props.subtitle}</p>
            </div>
        );
    }
}

const headerStyle = {
    textAlign: 'center',
    borderBottom: '3px solid #eee',
    marginBottom: '20px'
};
