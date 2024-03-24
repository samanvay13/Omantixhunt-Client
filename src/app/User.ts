export class User {
    id: number;
    name: string; // username
    fullname: string;
    accessLevel: number;
    team: string;
    email: string;
    status: string;
    memberOf: string;
    empID: string;
    username: string;

    constructor(id:number, name:string, fullname:string, accessLevel:number, team:string, email:string,
        status:string, memberOf:string, empID:string, username:string) {
        this.id = id;
        this.fullname = fullname;
        this.name = name;
        this.accessLevel = accessLevel;
        this.team = team;
        this.email = email;
        this.status = status;
        this.memberOf = memberOf;
        this.empID = empID;
        this.username = username
    }
}