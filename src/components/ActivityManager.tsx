
import * as React from 'react';
import {Component} from "react";

export interface ActivityManagerProps {
    inline?: boolean;
}

export class ActivityManager extends Component<ActivityManagerProps, {}> {

    public constructor(props?: any, context?: any) {
        super(props, context);
    }

    public render(): JSX.Element {

        if(this.props.inline) {
            styles.container.float = 'left';
        }

        return(
            <div style={styles.container} >
                ActivityManager
            </div>
        );
    }
}

const styles: {[name: string]: any} = {
    container: {
        width: '50%',
        textAlign: 'center'
    }
};