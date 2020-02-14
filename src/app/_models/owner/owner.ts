export class Owner {


    constructor(
        public _id ?: number,
        public firstName ?: string,
        public lastName ?: string,
        public username ?: string,
        public phone ?: string,
        public address ?:{
            governorate_id?:{},
            city_id?:{}
       },
        public email ?: string,
        public password ?: string,
        
    ) { }



}
