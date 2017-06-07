
import * as React from 'react';
import {Component} from'react';

export class Footer extends Component<{}, {}> {

    public constructor(props?: any, context?: any) {
        super(props, context);
    }

    public render(): JSX.Element {
        return(
            <div style={styles.content} >
                <div style={{fontWeight: 'bold'}} >Pomodoro - Manage your tasks</div>
                <span style={{fontSize: '12px'}} >
                    © {new Date().getFullYear()} - {new Date().getFullYear() + 1} -
                    New Company S.L. All Rights Reserved
                    </span>
            </div>
        );
    }
}

const styles: {[name: string]: any} = {
    content: {
        height: '70px',
        paddingTop: '15px',
        textAlign: 'center',
        backgroundColor: '#222',
        color: '#fafafa',
        position: 'fixed',
        bottom: '0',
        left: '0',
        width: '100%'
    }
};