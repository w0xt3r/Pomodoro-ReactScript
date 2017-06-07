
//TODO: terminar de controlar el setActivities

export interface Task {
    name: string;
    status: boolean;
}

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

    public setActivities(activity: Task): void {

        if(!localStorage.getItem('activities')) {
            localStorage.setItem('activities', JSON.stringify(this.basicList));
        }

    }

    public getActivities(): string[] {

        if(localStorage.getItem('activities')) {
            return JSON.parse(localStorage.getItem('activities'));
        }

        return [''];
    }

}
