import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h1>HOLAA </h1>
  <h3>
  Counter: {{counter}}
</h3>

<button (click)="increaseBy(1)">+1</button>
<button (click)="Reset()">Reset</button>
<button (click)="decreaseBy(-1)">-1</button>

  `
})

export class CounterComponent {
  public counter: number = 10;
  increaseBy( value: number):void{

    this.counter+=1;
  }

  decreaseBy(value: number):void{
    this.counter-=1;
  }


  Reset():void{
    this.counter=10;
  }




}
