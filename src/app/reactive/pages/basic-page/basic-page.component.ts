import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const rtx5050 = {
  name: "rtx 5050",
  price: 2500,
  inStorage: 6
}

@Component({
  templateUrl: './basic-page.component.html',
  styles: [
  ]
})



export class BasicPageComponent implements OnInit {

  public myForm: FormGroup = this.fb.group({
    name: ['',[Validators.required,Validators.minLength(3)],[]],
    price: [0,[Validators.required,Validators.min(0)],[]],
    inStorage: [0,[Validators.required,Validators.min(0)],[]],
  })

  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    // this.myForm.reset(rtx5050)
  }

  onSave():void {
    if(this.myForm.invalid) {
      this.myForm.markAllAsTouched
      return
    }
    console.log(this.myForm.value);
    this.myForm.reset({price: 0, inStorage: 0})
  }

}
