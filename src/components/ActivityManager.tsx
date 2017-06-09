
import * as React from 'react';
import {Component} from 'react';

import {Time} from './Time';

const style = require('./ActivityManager.scss');


export interface ActivityManagerProps {
    activity?: string[];
    text?: string;
    onActivityStatus: any;
    onAddTask: any;
}

export interface ActivityManagerState {
    text: string;
}

export class ActivityManager extends Component<ActivityManagerProps, ActivityManagerState> {

    public constructor(props?: any, context?: any) {
        super(props, context);

        this.state = {text: ''};

        this.handleInputText = this.handleInputText.bind(this);
    }

    private handleInputText(event: any): void {
        this.setState({text: event.target.value});
    }

    public render(): JSX.Element {

        return(
            <div className={style.content} >

                <span>Working in: {this.props.text}</span>

                <Time/>

                <div>

                    <button
                        className={style.incomplete}
                        onClick={() => this.props.onActivityStatus(false)}>Incomplete</button>

                    <button
                        className={style.complete}
                        onClick={() => this.props.onActivityStatus(true)} >Complete</button>

                </div>

                <div>

                    <h3>Add new task to do:</h3>

                    <input
                        type="text" id="task"
                        value={this.state.text}
                        onChange={this.handleInputText}
                        placeholder="Type here..." />

                    <button onClick={() => {this.props.onAddTask(this.state.text); this.setState({text: ''})}} >Add task</button>

                </div>

            </div>
        );
    }
}

const styles: {[name: string]: any} = {
    incomplete: {
        border: 'none',
        height: '35px',
        width: '100px',
        boxShadow: '1px 1px 3px rgba(34, 34, 34, 0.3)',
        marginRight: '20px',
        backgroundColor: '#eee',
        transition: 'all 0.5s'
    },
    complete: {
        border: 'none',
        height: '35px',
        width: '100px',
        boxShadow: '1px 1px 3px rgba(34, 34, 34, 0.3)',
        marginRight: '20px',
        backgroundColor: '#eee',
        transition: 'all 0.5s'
    }
};