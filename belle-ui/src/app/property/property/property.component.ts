import { Component, OnInit, ViewChild } from '@angular/core';
import {Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddPropertyComponent } from '../add-property/add-property.component';
import { AddEventComponent } from '../event/add-event/add-event.component';
import { ApiService } from '../services/api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'bl-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {

  displayedColumns: string[] = ['name', 'url', 'action','details'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private dialog: MatDialog, private api:ApiService) { }

  openDialog() {
    this.dialog.open(AddPropertyComponent, {
      width:'30%'
    }).afterClosed().subscribe(val=>{
      if(val == 'save'){
        this.getAllProperties()
      }
    })
  }
  getAllProperties(){
    this.api.getProperties()
    .subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error:(err)=>{
        alert("Error while fetching the propertes");
      }
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  editProperty(row : any){
    this.dialog.open(AddPropertyComponent, {
      width:'30%',
      data:row
    }).afterClosed().subscribe(val=>{
      if(val == 'update'){
        this.getAllProperties()
      }
    })
  }
  deleteProperty(id : string){
    this.api.deleteProduct(id)
    .subscribe({
      next:(res)=>{
        alert('Deleted Successfully');
        this.getAllProperties()
      },
      error:()=>{
        alert('error while deleting')
      }
    })
  }
  addEvent(){
    this.dialog.open(AddEventComponent, {
      width:'30%'
    }).afterClosed().subscribe(val=>{
      
      this.getAllProperties()
    
    })
  }
  ngOnInit(): void {
    this.getAllProperties()
  }
  
}
