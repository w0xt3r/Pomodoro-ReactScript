
import * as React from 'react';

import {Storage} from '../models/Storage';

import {Header} from './Header';
import {Content} from './Content';

export default class App extends React.Component<{}, {}> {

    public constructor(props?: any, context?: any) {
        super(props, context);

        Storage.prototype.setActivities();
    }

    public render(): JSX.Element {
        return (
            <div>
                <Header title="Pomodoro" subtitle="working with React + Typescript" />
                <Content/>
            </div>
        );
    }

}
