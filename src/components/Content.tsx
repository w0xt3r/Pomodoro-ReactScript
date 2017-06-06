
import * as React from 'react';
import {Component} from "react";

import {Storage} from '../models/Storage';

import {ListContainer} from './ListContainer';
import {ActivityManager} from './ActivityManager';

export class Content extends Component<{}, {}> {

    public constructor(props?: any, context?: any) {
        super(props, context);
    }

    public render(): JSX.Element {
        return(
            <div>
                <ListContainer inline title="Tareas pendientes"
                               activities={Storage.prototype.getActivities()} />

                <ActivityManager inline />

                <ListContainer inline={false} title="Tareas finalizadas"
                               activities={Storage.prototype.getActivities()} />
            </div>
        );
    }
}