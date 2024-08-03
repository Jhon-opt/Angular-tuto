import { Character } from './../interfaces/character.interface';
import { Component } from '@angular/core';

import { DbzService } from '../services/dbz.service.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './name.component.html',

})
export class NamePageComponent {
  constructor(private dbzService:DbzService){


  }

  get character():Character[]{
    return [...this.dbzService.characters]
  }

  onDeleteCharacter(id:string):void{
    this.dbzService.onDeleteCharacter(id);
  }

  onNewCharacter(character:Character):void{
    this.dbzService.onNewCharacter(character);
  }
}
