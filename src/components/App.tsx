
import * as React from 'react';

import {Task} from '../models/Task';
import {Storage} from '../models/Storage';
import {Header} from './Header';
import {Footer} from './Footer';
import {ListContainer} from './ListContainer';
import {ActivityManager} from './ActivityManager';

const style = require('./App.scss');


export interface AppState {
    textChild: string;
    activities: Task[];
}

export default class App extends React.Component<{}, AppState> {

    private storageManager: Storage = new Storage();

    public constructor(props?: any, context?: any) {
        super(props, context);

        this.storageManager.initActivities();

        this.state = {
            textChild: '#Click any activity from the left side',
            activities: this.storageManager.getActivities()
        };

        this.handleClickItemList = this.handleClickItemList.bind(this);
        this.handleUpdateStorage = this.handleUpdateStorage.bind(this);
        this.handleAddTask = this.handleAddTask.bind(this);
    }

    /**
     * Change the text from the child component
     *
     * @param   {event} event
     */
    public handleClickItemList(event: any): void {
        this.setState({textChild: event.target.textContent});
    }

    /**
     * Update the Storage when a task is complete
     *
     * @param   {Object}    status
     */
    public handleUpdateStorage(status: boolean): void {

        if(this.state.textChild.slice(0,1) === '#') {
            return;
        }

        if(status) {
            this.state.activities.filter(a => {
                if(a.name === this.state.textChild) {
                    a.status = true;
                }

                return a;
            });

            // set the task to localStorage
            this.storageManager.setActivities(this.state.activities);

            // get the task[] from localStorage and setState to render again
            this.setState({activities: this.storageManager.getActivities()});

        } else {
            //incomplete
        }

        this.setState({textChild: '#Click any activity from the left side'});
    }

    public handleAddTask(task: string): void {
        this.storageManager.setActivity(task);
        this.setState({activities: this.storageManager.getActivities()})
    }

    public render(): JSX.Element {
        return (
            <div className={style.body} >

                <Header title="Pomodoro" subtitle="working with React + Typescript" />

                <div className={style.container} >
                    <div>

                        <ListContainer inline title="Task to do" onClick={this.handleClickItemList}
                                       activities={this.state.activities.filter(a => {return a.status === false})} />

                        <ActivityManager text={this.state.textChild}
                                         onAddTask={this.handleAddTask}
                                         onActivityStatus={this.handleUpdateStorage} />

                        <ListContainer inline={false} title="Task done"
                                       activities={this.state.activities.filter(a => {return a.status === true})} />

                    </div>
                </div>

                <Footer/>

            </div>
        );
    }

}
