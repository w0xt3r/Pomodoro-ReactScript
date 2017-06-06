
import * as React from 'react';
import {Component} from "react";

export interface ListContainerProps {
    inline?: boolean;
    title: string;
    activities?: string[];
}

export class ListContainer extends Component<ListContainerProps, {}> {

    public constructor(props?: ListContainerProps, context?: any) {
        super(props, context);
    }

    public renderItem(item: string, index: number): JSX.Element {
        return <li key={index} >{item}</li>;
    }

    public render(): JSX.Element {

        styles.container.float = 'right';

        if(this.props.inline) {
            styles.container.float = 'left';
        }

        return (
            <div style={styles.container} >
                <p style={styles.title} >{this.props.title}</p>
                <ul style={styles.list} >
                    {this.props.activities.map(this.renderItem)}
                </ul>
            </div>
        );
    }

}

const styles: {[name: string]: any} = {
    container: {
        width: '25%',
        textAlign: 'center',
        padding: '0 10px'
    },
    title: {
        fontSize: '20px',
        borderBottom: '2px solid #bbb',
        marginBottom: '20px'
    },
    list: {
        padding: '0'
    }
};
