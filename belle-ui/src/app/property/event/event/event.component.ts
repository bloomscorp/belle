import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AddEventComponent } from '../add-event/add-event.component';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'bl-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  displayedColumns: string[] = ['name', 'eventType', 'action','details'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  

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
    private dialog: MatDialog,
    private _router : Router,
    private route: ActivatedRoute,
    private api:ApiService

  ) { }

  openDialog() {
    this.dialog.open(AddEventComponent, {
      width:'30%'
    }).afterClosed().subscribe(val=>{
      if(val == 'save'){
        this.getAllEvents()
      }
    })
  }

  getAllEvents(){
    this.dataSource = new MatTableDataSource(this.events);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editEvent(row : any){
    this.dialog.open(AddEventComponent, {
      width:'30%',
      data:row
    }).afterClosed().subscribe(val=>{
      if(val == 'update'){
        this.getAllEvents()
      }
    }) 
  }
  deleteEvent(id : string){
    this.api.deleteProduct(id)
    .subscribe({
      next:(res)=>{
        alert('Deleted Successfully');
        this.getAllEvents()
      },
      error:()=>{
        alert('error while deleting')
      }
    })
  }

  ngOnInit(): void {
    this.getAllEvents();
  }
  reDirectToEventDetailsPage(eventId : number){
    console.log("abc")
    this._router.navigate(['event',eventId], {relativeTo: this.route})
  }

}
