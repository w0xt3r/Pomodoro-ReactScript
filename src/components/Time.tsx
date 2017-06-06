
import * as React from 'react';
import {Component} from "react";

export interface TimeState {
    minute: number;
    second: number;
}

export class Time extends Component<{}, TimeState> {

    private minute: number = 25;
    private second: number = 0;
    private loop: any;

    public constructor(props?: any, context?: any) {
        super(props, context);

        this.state = {minute: this.minute, second: this.second};

        this.formatClock = this.formatClock.bind(this);
        this.loop = setInterval(this.formatClock, 1000);

    }

    public formatClock(): void {

        if(this.minute === 0 && this.second === 0) {
            clearInterval(this.loop);
        }
        else {
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

    public render(): JSX.Element {

        return(
            <div>
                {this.state.minute <= 9 ? '0' + this.state.minute : this.state.minute}
                :
                {this.state.second <= 9 ? '0' + this.state.second : this.state.second}
            </div>
        );
    }

}