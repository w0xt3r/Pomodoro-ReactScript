
export class Storage {

    private basicList: string[] = ['api RESTful', 'react routes', 'revisar tslint'];

    public setActivities(): void {

        if(!localStorage.getItem('activities')) {
            localStorage.setItem('activities', JSON.stringify(this.basicList));
        }

    }

    public getActivities(): string[] {

        if(localStorage.getItem('activities')) {
            return JSON.parse(localStorage.getItem('activities'));
        }

        return [""];
    }

}
