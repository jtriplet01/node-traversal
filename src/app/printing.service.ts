import { Injectable } from '@angular/core';
import { Value } from './object.model';

@Injectable({
  providedIn: 'root'
})
export class PrintingService {
  constructor() { }

  printArr = []
  mapPath(obj:Value){
    let x = Number(obj.min);
    if(obj.step == 0 || obj.min != obj.max && obj.step == 1){
      return this.printArr.push("Invalid arguments");
    }
    let distance = (obj.max - obj.min)/(obj.step - 1);
    console.log(distance);
    for(let i = 0; i < obj.step - 1; i++){
      this.printArr.push("name: " + obj.name + " x: " + x + " y: " + (x + distance));
      x = x + distance;
    }
  }
  getArr(){
    return this.printArr;
  }
}
