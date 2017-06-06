
import * as React from 'react';
import {Component} from 'react';

import {Time} from './Time';

export interface ActivityManagerProps {
    inline?: boolean;
    activity?: string[];

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
                <Time/>
            </div>
        );
    }
}

const styles: {[name: string]: any} = {
    container: {
        width: '46.5%',
        textAlign: 'center'
    }
};