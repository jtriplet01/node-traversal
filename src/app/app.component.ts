import { Component } from '@angular/core';
import { Value } from './object.model';
import { PrintingService } from './printing.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interview';
  objectArray = [];
  constructor(private fb: FormBuilder,
              private ps: PrintingService){}
  objectForm = this.fb.group({
    name: [''],
    min: [''],
    max: [''],
    step: ['']
  });

  addObject(){
    let object = {
      name: this.objectForm.controls['name'].value,
      min: this.objectForm.controls['min'].value,
      max: this.objectForm.controls['max'].value,
      step: this.objectForm.controls['step'].value
    };
    this.ps.mapPath(object);
    this.objectForm.setValue({
      name: [''],
      min: [''],
      max: [''],
      step: ['']
    });
    this.objectArray = this.ps.getArr();
  }
}
