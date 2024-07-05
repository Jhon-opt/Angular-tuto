import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: '../list/list.component.html',
  styleUrl: '../list/list.component.css'
})
export class ListComponent {
    public heroNames: string[]= ['Batman','Nightwing','Redhood','Redrobin','Robin','Superman','Daredevil'];
    public deletedHero?: string;
    removeLastHero():void {
      this.deletedHero =this.heroNames.pop();

    }




  }
