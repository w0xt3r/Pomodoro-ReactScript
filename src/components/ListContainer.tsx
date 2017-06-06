
import * as React from 'react';
import {Component} from 'react';

export interface ListContainerProps {
    inline?: boolean;
    title: string;
    activities?: string[];
}

export class ListContainer extends Component<ListContainerProps, {}> {

    public constructor(props?: ListContainerProps, context?: any) {
        super(props, context);

        this.renderItem = this.renderItem.bind(this);
        this.handleClickItem = this.handleClickItem.bind(this);
    }

    public handleClickItem(event: any): void {
        console.log('[G] - clicked', event.target.textContent);
    }

    public renderItem(item: string, index: number): JSX.Element {

        return <li key={index} onClick={this.handleClickItem} >{item}</li>;
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
        padding: '0 10px',
        background: '#e5e5e5',
        borderRadius: '5px',
        boxShadow: '0 0 5px rgba(34, 34, 34, 0.3)'
    },
    title: {
        fontSize: '20px',
        borderBottom: '2px solid #bbb',
        marginBottom: '20px',
        fontWeight: 'bold'
    },
    list: {
        padding: '0',
        cursor: 'pointer'
    }
};
