
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

        this.state = {textChild: '"Click any activity from the left side"'};
        // this.storageManager.setActivities();

        this.handleClickItemList = this.handleClickItemList.bind(this);
        this.handleUpdateStorage = this.handleUpdateStorage.bind(this);
    }

    public handleClickItemList(event): void {
        this.setState({textChild: event.target.textContent});
    }

    //TODO: terminar de controlar la gestion del storage
    public handleUpdateStorage(status: boolean): void {
        console.log('status', status);
        if(status) {
            //complete

        } else {
            //incomplete
        }

        this.setState({textChild: '"Click any activity from the left side"'});
    }

    public render(): JSX.Element {
        return (
            <div style={styles.container}>
                <Header title="Pomodoro" subtitle="working with React + Typescript" />
                <div>
                    <ListContainer inline title="Task to do" onClick={this.handleClickItemList}
                                   activities={this.storageManager.getActivities()} />

                    <ActivityManager inline text={this.state.textChild}
                                     onActivityStatus={this.handleUpdateStorage} />

                    <ListContainer inline={false} title="Task done"
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