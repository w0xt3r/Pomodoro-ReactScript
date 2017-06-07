
import * as React from 'react';
import {Component} from "react";

export interface TimeState {
    minute: number;
    second: number;
    hurry: boolean;
    paused: boolean;
}

export class Time extends Component<{}, TimeState> {

    private minute: number = 25;
    private second: number = 0;
    private loop: any;

    public constructor(props?: any, context?: any) {
        super(props, context);

        this.state = {minute: this.minute, second: this.second, hurry: false, paused: true};

        this.formatClock = this.formatClock.bind(this);
        this.startClock = this.startClock.bind(this);
        this.resetClock = this.resetClock.bind(this);

    }

    public formatClock(): void {

        if(this.minute === 0 && this.second === 0) {
            clearInterval(this.loop);
        }
        else {

            if(this.minute === 0) {
                this.setState({hurry: !this.state.hurry});
            }

            if(this.second === 0) {
                this.minute -= 1;
                this.second = 59;
                this.setState({minute: this.minute, second: this.second});
                return;
            }

            if(this.second > 0) {
                this.second -= 1;
                this.setState({minute: this.minute, second: this.second});
            }

        }

    }

    public startClock(event: any): void {

        if(this.state.paused) {
            this.loop = setInterval(this.formatClock, 1000);
            this.setState({paused: !this.state.paused});
            event.target.textContent = 'Pause';
        } else {
            clearInterval(this.loop);
            this.setState({paused: !this.state.paused});
            event.target.textContent = 'Start';
        }

    }

    public resetClock(): void {

        clearInterval(this.loop);
        this.minute = 25;
        this.second = 0;
        this.setState({minute: 25, second: 0, hurry: false, paused: true});
        document.getElementById('start').textContent = 'Start';
    }

    public render(): JSX.Element {

        return(
            <div style={styles.content}>
                <div>
                    <span style={this.state.hurry ? styles.noTime : styles.time} >
                        {this.state.minute <= 9 ? '0' + this.state.minute : this.state.minute}
                        :
                    </span>
                    <span style={this.state.hurry ? styles.noTime : styles.time} >
                        {this.state.second <= 9 ? '0' + this.state.second : this.state.second}
                    </span>
                </div>

                <div>
                    <button id="start" onClick={this.startClock} >Start</button>
                    <button onClick={this.resetClock} >Reset</button>
                </div>
            </div>
        );
    }

}

const styles: {[name: string]: any} = {
    content: {
        fontSize: '60px'
    },
    time: {
        color: 'limegreen'
    },
    noTime: {
        color: 'lightcoral'
    }
};