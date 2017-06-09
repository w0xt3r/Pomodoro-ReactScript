
import * as React from 'react';
import {Component} from'react';

const style = require('./Footer.scss');

export class Footer extends Component<{}, {}> {

    private year: number;

    public constructor(props?: any, context?: any) {
        super(props, context);

        this.year = new Date().getFullYear();
    }

    public render(): JSX.Element {
        return(
            <div className={style.content} >

                <div className={style.title} >Pomodoro - Manage your tasks</div>

                <span className={style.subtitle} >
                    © {this.year} - {this.year + 1} - New Company S.L. All Rights Reserved
                </span>

            </div>
        );
    }
}

