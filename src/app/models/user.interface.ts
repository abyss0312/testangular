

export interface UserModel {
    firstname: string;
    lasname: string;
    birthdate:string;
    username:string;
    password:string;
    email: string;
    isActive:boolean;
    userType: any
}

export interface LoginFormModel{
    username: string | null;
    password:string | null;
}


export interface UserStore  {
    id: number,
    username:string,
    token:string,
    isActive:boolean
}