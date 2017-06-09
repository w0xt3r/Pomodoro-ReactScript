
import * as React from 'react';
import {Component} from 'react';

import {Task} from '../models/Task';

const style = require('./ListContainer.scss');

export interface ListContainerProps {
    inline?: boolean;
    title: string;
    activities?: Task[];
    onClick?: any;
}

export interface ListContainerState {
    index?: number;
}

export class ListContainer extends Component<ListContainerProps, ListContainerState> {

    public constructor(props?: ListContainerProps, context?: any) {
        super(props, context);

        this.state = {index: -1};

        this.renderItem = this.renderItem.bind(this);
    }

    public render(): JSX.Element {

        return (
            <div className={this.props.inline ? style.left : style.right} >

                <p className={style.title} >{this.props.title}</p>

                <ul className={style.list} >
                    {this.props.activities.map(this.renderItem)}
                </ul>

            </div>
        );
    }

    private renderItem(item: Task, index: number): JSX.Element {

        return (
            <li
                key={index}
                value={index}
                className={style.itemList}
                onClick={this.props.onClick} >{item.name}</li>
        );
    }

}
