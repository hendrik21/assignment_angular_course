import { Component, OnInit } from '@angular/core';
import {LeaderService} from '../services/leader.service';
import {LEADER} from '../shared/leaders';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private leaderService: LeaderService) { }

  leaders = LEADER;

  ngOnInit(): void {
    
  }

}
