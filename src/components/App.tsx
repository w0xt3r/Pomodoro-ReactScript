
import * as React from 'react';

import {Storage} from '../models/Storage';

import {Header} from './Header';
import {ListContainer} from './ListContainer';
import {ActivityManager} from './ActivityManager';

export default class App extends React.Component<{}, {}> {

    private storageManager: Storage = new Storage;

    public constructor(props?: any, context?: any) {
        super(props, context);

        this.storageManager.setActivities();
    }

    public render(): JSX.Element {
        return (
            <div style={styles.container}>
                <Header title="Pomodoro" subtitle="working with React + Typescript" />
                <div>
                    <ListContainer inline title="Tareas pendientes"
                                   activities={this.storageManager.getActivities()} />

                    <ActivityManager inline />

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