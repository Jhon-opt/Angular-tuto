import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: '../hero/hero.component.html',
  styleUrl: '../hero/hero.component.css'
})
export class HeroComponent {
         public name: string='Daredevil';
         public age:  number=35;

         get capitalizedName():string{
          return this.name.toUpperCase();
         }

         get HeroDescription():string{
          return`${this.name}-${this.age}`
         }

          changeHero():void{
              this.name='Batman';
          }

          changeAge():void{
              this.age=40;
          }

          resetForm():void{
            this.name='Daredevil';
            this.age=35
          }
}
