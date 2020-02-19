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

  playground :Playground = new Playground(0,"")
  constructor(
    private playgroundService :PlaygroundService,
    private aroute:ActivatedRoute 
  ) {}

  ngOnInit() {
    this.aroute.params.subscribe(a=>{
       
      this.playgroundService.getPlaygroundDetails(a.id).subscribe(d=>{
        //  ("playground details TS",d)
        console.log(d)
        this.playground = d ;
        

      })
    })
  }

}
