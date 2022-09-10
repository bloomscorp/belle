import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'bl-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  events = [
    {
      "eventType": "simple event",
      "propertyId": 1,
      "name": "Button click",
      "eventId": 1
    },
    {
      "eventType": "simple event",
      "propertyId": 1,
      "name": "Button click",
      "eventId": 2
    },
    {
      "eventType": "simple event",
      "propertyId": 1,
      "name": "Button click",
      "eventId": 3
    }
  ]
  constructor(
    private _router : Router

  ) { }

  ngOnInit(): void {
  }
  reDirectToEventDetailsPage(eventId : number){
    console.log("abc")
    this._router.navigate(['/event',eventId])
  }

}
