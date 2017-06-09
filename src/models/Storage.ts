
import {Task} from './Task';

export class Storage {

    private basicList: Task[] = [
        {
            name: 'api RESTful',
            status: false
        },
        {
            name: 'learn React',
            status: false
        },
        {
            name: 'fill the bottle',
            status: true
        }
        ];

    public initActivities(): void {
        if(!localStorage.getItem('activities')) {
            localStorage.setItem('activities', JSON.stringify(this.basicList));
        }
    }

    public setActivities(activities: Task[]): void {
        localStorage.setItem('activities', JSON.stringify(activities));
    }

    public setActivity(activity: string): void {

        let aux: Task[] = JSON.parse(localStorage.getItem('activities'));
        aux.push({name: activity, status: false});
        localStorage.setItem('activities', JSON.stringify(aux));

    }

    public getActivities(): Task[] {

        if(localStorage.getItem('activities')) {
            return JSON.parse(localStorage.getItem('activities'));
        }

    }

}
