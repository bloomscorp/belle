import { Component,Inject, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'bl-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {

  eventForm !: FormGroup;
  actionBtn : string = 'Save';

  constructor(
    private formBuilder  : FormBuilder,
    private api : ApiService,
    @Inject(MAT_DIALOG_DATA) public editData : any, 
    private dialogRef : MatDialogRef<AddEventComponent>
  ) { }

  ngOnInit(): void {
    this.eventForm = this.formBuilder.group({
      name : ['',Validators.required],
      eventType : ['',Validators.required]
    })
    if(this.editData){
      this.actionBtn = 'Update'
      this.eventForm.controls['name'].setValue(this.editData.name);
      this.eventForm.controls['eventType'].setValue(this.editData.eventType);
    }
  }
  addEvent(){
    if(!this.editData){
      if(this.eventForm.valid){
        this.api.postProperty(this.eventForm.value)
        .subscribe({
          next:(res)=>{
            alert("Property added successfully");
            this.eventForm.reset();
            this.dialogRef.close('Save');
          },
          error:()=>{
            alert("Error while adding the property");
          }
        })
      }
    }
    else{
      this.updateProduct()
    }
  }

  updateProduct(){
    this.api.putProduct(this.eventForm.value, this.editData.propertyId)
    .subscribe({
      next:(res)=>{
        alert("Property updated successfully");
        this.eventForm.reset();
        this.dialogRef.close('update')
      },
      error:()=>{
        alert("Error while updating the property");
      }
    })
  }

}
