
import * as React from 'react';
import {Component} from 'react';

export interface ListContainerProps {
    inline?: boolean;
    title: string;
    activities?: string[];
    onClick?: any;
}

export interface ListContainerState {
    index?: number;
}

export class ListContainer extends Component<ListContainerProps, ListContainerState> {

    public constructor(props?: ListContainerProps, context?: any) {
        super(props, context);

        this.renderItem = this.renderItem.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);

        this.state = {index: -1};
    }

    public handleMouseEnter(event: any): void {
        this.setState({index: event.target.value});
    }

    public handleMouseLeave(event: any): void {
        this.setState({index: -1});
    }

    public renderItem(item: string, index: number): JSX.Element {

        let itemStyle: {[name: string]: any} = {
            fontWeight: 'normal',
            marginBottom: '10px'
        };

        if(this.state.index === index) {
            itemStyle.fontWeight = 'bold';
        }

        return <li key={index} value={index} style={itemStyle}
                   onMouseEnter={this.handleMouseEnter}
                   onMouseLeave={this.handleMouseLeave}
                   onClick={this.props.onClick} >{item}</li>;
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
        height: '400px',
        overflowY: 'auto',
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
        cursor: 'pointer',
        listStyle: 'none'
    }
};
