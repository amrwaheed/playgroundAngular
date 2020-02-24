import { Component, OnInit } from '@angular/core';
import { Playground } from 'src/app/_models/playground/playground';
import { PlaygroundService } from 'src/app/_services/playground/playground.service';

@Component({
  selector: 'app-list-playground',
  templateUrl: './list-playground.component.html',
  styleUrls: ['./list-playground.component.css']
})
export class ListPlaygroundComponent implements OnInit {

  playgrounds :Playground[] =[] ;

  constructor(
    private playgroundService : PlaygroundService
  ) { }

  ngOnInit() {

    this.playgroundService.getPlaygroundbyOwnerId().subscribe((result)=>{
      console.log(result)
      this.playgrounds = result

    })
  }


}
