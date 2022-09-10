import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'bl-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {

  propertyForm !: FormGroup;
  actionBtn : string = 'Save';
  constructor(private formBuilder  : FormBuilder,
    private api : ApiService,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef : MatDialogRef<AddPropertyComponent>) { }

  ngOnInit(): void {
    this.propertyForm = this.formBuilder.group({
      name : ['',Validators.required],
      url : ['',Validators.required],
      userId : '3aa37d1f-f416-4ba0-a515-f8efadedf92c'
    })
    if(this.editData){
      this.actionBtn = 'Update'
      this.propertyForm.controls['name'].setValue(this.editData.name);
      this.propertyForm.controls['url'].setValue(this.editData.url);
    }
  }
  addProperty(){
    if(!this.editData){
      if(this.propertyForm.valid){
        this.api.postProperty(this.propertyForm.value)
        .subscribe({
          next:(res)=>{
            alert("Property added successfully");
            this.propertyForm.reset();
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
    this.api.putProduct(this.propertyForm.value, this.editData.propertyId)
    .subscribe({
      next:(res)=>{
        alert("Property updated successfully");
        this.propertyForm.reset();
        this.dialogRef.close('update')
      },
      error:()=>{
        alert("Error while updating the property");
      }
    })
  }

}
