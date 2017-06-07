
import * as React from 'react';
import {Component} from 'react';

import {Time} from './Time';
import {type} from "os";

export interface ActivityManagerProps {
    inline?: boolean;
    activity?: string[];
    text?: string;
    onActivityStatus: any;
    onAddTask: any;
}

export interface ActivityManagerState {
    bgColor: number;
    text: string;
}

export class ActivityManager extends Component<ActivityManagerProps, ActivityManagerState> {

    public constructor(props?: any, context?: any) {
        super(props, context);

        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handleInputText = this.handleInputText.bind(this);

        this.state = {bgColor: 0, text: ''};
    }

    public handleMouseEnter(event: any): void {
        this.setState({bgColor: event.target.value * 1});
    }

    public handleMouseLeave(event: any): void {
        this.setState({bgColor: 0});
    }

    public handleInputText(event: any): void {
        this.setState({text: event.target.value});
    }

    public render(): JSX.Element {

        if(this.props.inline) {
            styles.container.float = 'left';
        }

        if(this.state.bgColor === 0) {
            styles.incomplete.backgroundColor = '#eee';
            styles.complete.backgroundColor = '#eee';
        } else if(this.state.bgColor === 1) {
            styles.incomplete.backgroundColor = '#F08080';
            styles.complete.backgroundColor = '#eee';
        } else if(this.state.bgColor === 2) {
            styles.incomplete.backgroundColor = "#eee";
            styles.complete.backgroundColor = "#90EE90";
        }

        return(
            <div style={styles.container} >

                <span>Working in: {this.props.text}</span>

                <Time/>

                <div style={{marginTop: '20px'}}>
                    <button style={styles.incomplete} value={1}
                            onClick={() => this.props.onActivityStatus(false)}
                            onMouseEnter={this.handleMouseEnter}
                            onMouseLeave={this.handleMouseLeave} >Incomplete</button>

                    <button style={styles.complete} value={2}
                            onClick={() => this.props.onActivityStatus(true)}
                            onMouseEnter={this.handleMouseEnter}
                            onMouseLeave={this.handleMouseLeave} >Complete</button>
                </div>

                <div style={{marginTop: '50px'}}>
                    <h3>Add new task to do:</h3>
                    <input type="text" id="task" value={this.state.text}
                           onChange={this.handleInputText} placeholder="Type here..." />
                    <button onClick={() => {this.props.onAddTask(this.state.text); this.setState({text: ''})}} >Add task</button>
                </div>

            </div>
        );
    }
}

const styles: {[name: string]: any} = {
    container: {
        width: '46.5%',
        textAlign: 'center'
    },
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