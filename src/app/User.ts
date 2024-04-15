export class User {
    _id: number;
    fName: string;
    lName: string;
    email: string;
    whatsapp: number;
    username: string;

    constructor(_id:number, lName:string, fName:string, email:string, whatsapp:number, username:string) {
        this._id = _id;
        this.fName = fName;
        this.lName = lName;
        this.email = email;
        this.whatsapp = whatsapp;
        this.username = username
    }
}