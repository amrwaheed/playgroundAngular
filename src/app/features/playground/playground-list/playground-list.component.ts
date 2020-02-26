import { Component, OnInit } from '@angular/core';
import { Playground } from 'src/app/_models/playground/playground';
import { PlaygroundService } from 'src/app/_services/playground/playground.service';

@Component({
  selector: 'app-playground-list',
  templateUrl: './playground-list.component.html',
  styleUrls: ['./playground-list.component.css']
})
export class PlaygroundListComponent implements OnInit {

  playgrounds :Playground[] =[] ;
  
  constructor(
    private playgroundService : PlaygroundService
  ) { }

  ngOnInit() {
    this.playgroundService.getAllPlaygrounds().subscribe(d=> {
     
      this.playgrounds = d;
     
    
    })
  }

}
