import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.scss']
})
export class ChangePassComponent implements OnInit {

  form: FormGroup;
  
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldpass: ['',Validators.required],
      newpass: ['',Validators.required],
      conpass: ['',Validators.required]  

    });
   }
   get oldpass(){ return this.form.get('oldpass')};
   get newpass(){ return this.form.get('newpass')};
   get conpass(){ return this.form.get('conpass')};
  ngOnInit() {
  }

}
 