export class User {
    constructor(
        public _id?:number,
        public firstName?:string,
        public lastName?:string,
        public username?:string,
        public email?:string,
        public phone?:number,
        public password?:string,
        public address?:{
             governorate_id?:{},
             city_id?:{}
        },
        public imageProfile ?: string,
        
        // public governorate_id?:number,
        // public city_id?:number
    ){}
}
