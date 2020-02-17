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

  playground :Playground = new Playground(
    1000,"anfield",
    "image","england , liverpool",
    {lat:100,lng:100,accuracy:100},100,100,true ,2,1,
    
    )
  constructor(
    private playgroundService :PlaygroundService,
    private aroute:ActivatedRoute 
  ) {}

  ngOnInit() {
    this.aroute.params.subscribe(a=>{
      console.log ("a",a)
      this.playgroundService.getPlaygroundDetails(a.id).subscribe(d=>{
        // console.log("playground details TS",d)
        this.playground = d ;
        console.log("this.playground ",this.playground)

      })
    })
  }

}
