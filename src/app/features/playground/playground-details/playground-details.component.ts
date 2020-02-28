import { Component, OnInit } from '@angular/core';
import { Playground } from 'src/app/_models/playground/playground';
import { PlaygroundService } from 'src/app/_services/playground/playground.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-playground-details',
  templateUrl: './playground-details.component.html',
  styleUrls: ['./playground-details.component.css']
})
export class PlaygroundDetailsComponent implements OnInit {
  role;
  playground :Playground = new Playground(0,"");
  lat = 31.051141700000002;
  lng = 31.3427151;

  location = true;
  constructor(
    private playgroundService :PlaygroundService,
    private aroute:ActivatedRoute 
  ) {}

  ngOnInit() {

    this.aroute.params.subscribe(a=>{
      this.playgroundService.getPlaygroundDetails(a.id).subscribe(d=>{  
        this.playground = d ;
        this.lat = this.playground.location.lat
        this.lng = this.playground.location.lng
      })
    })
    if(this.playgroundService.getOwnerPayLoad() ){
      this.role = this.playgroundService.getOwnerPayLoad().type
    }else{
      this.role = 'ann'
    }
     
  }

}
