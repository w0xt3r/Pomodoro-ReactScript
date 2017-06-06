
import * as React from 'react';

import {Storage} from '../models/Storage';

import {Header} from './Header';
import {ListContainer} from './ListContainer';
import {ActivityManager} from './ActivityManager';

export interface AppState {
    textChild: string;
}

export default class App extends React.Component<{}, AppState> {

    private storageManager: Storage = new Storage;

    public constructor(props?: any, context?: any) {
        super(props, context);

        this.state = {textChild: 'foo'};
        this.storageManager.setActivities();

        this.handleClickChild = this.handleClickChild.bind(this);
    }

    public handleClickChild(event): void {
        this.setState({textChild: event.target.textContent});
    }

    public render(): JSX.Element {
        return (
            <div style={styles.container}>
                <Header title="Pomodoro" subtitle="working with React + Typescript" />
                <div>
                    <ListContainer inline title="Tareas pendientes" onClick={this.handleClickChild}
                                   activities={this.storageManager.getActivities()} />

                    <ActivityManager inline text={this.state.textChild} />

                    <ListContainer inline={false} title="Tareas finalizadas"
                                   activities={this.storageManager.getActivities()} />
                </div>
            </div>
        );
    }

}

const styles: {[name: string]: any} = {
    container: {
        padding: '0 20px'
    }
};