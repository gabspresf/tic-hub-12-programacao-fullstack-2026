type Role = "ADMIN" | "CUSTOMER";

interface IUser {
    id: number;
    username:string;
    email:string;
    role:Role;
}

export class User implements IUser {
    constructor(
        public id:number,
        public username:string,
        public email:string,
        public role:Role
    ){}
}