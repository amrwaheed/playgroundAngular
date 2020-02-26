export class Playground {
    constructor(
       public _id?:number,
       public name?:string,
       public address ?:{
        governorate_id:{},
        city_id:{}
        },
       public location?:{
        lat?: number,
        lng? : number
       },
       public dayPrice?:number,
       public nightPrice?:number,
       public covered?:boolean,
       public category_id?:number,
       public owner_id?:number,
       public details?:string,

       public uploadImages?:any
    )
    {}
    
}
