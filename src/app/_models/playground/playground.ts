export class Playground {
    constructor(
       public _id?:number,
       public name?:string,
       public image?:string,
       public address?:string,
       public location?:{
        lat: number,
        lng : number,
        accuracy : number
       },
       public dayPrice?:number,
       public nightPrice?:number,
       public covered?:boolean,
       public category_id?:number,
       public owner_id?:number,
       public details?:string,
    )
    {}
    
}
