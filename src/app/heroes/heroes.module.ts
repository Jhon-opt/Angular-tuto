import { NgModule } from "@angular/core";
import { ListComponent } from "./components/list.component";
import { HeroComponent } from "./components/hero.component";
import { CommonModule } from "@angular/common";


@NgModule({
  declarations: [
    ListComponent,
    HeroComponent
  ],
  exports:[
    ListComponent,
    HeroComponent
  ],
  imports:[
    CommonModule
  ]
})

export class heroesModule {

}
