import { Character } from './../interfaces/character.interface';
import { Injectable } from '@angular/core';
import{v4 as uuid} from 'uuid';
@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    Name: 'Krilin',
    power: 1000
  }, {
    id: uuid(),
    Name: 'Goku',
    power: 10000
  }, {
    id: uuid(),
    Name: 'waos',
    power: 100090
  }];
  onNewCharacter(character: Character): void {
    console.log('MainPage');
    console.log(character);
    const newCharacter: Character = {id: uuid(),...character};
    this.characters.push(newCharacter);
  }

  onDeleteCharacter(id: string): void {
    console.log('Deleting character with id:', id);  // Verifica que el ID se recibe correctamente
    this.characters = this.characters.filter(character => character.id !== id);
    console.log('Remaining characters:', this.characters);  // Verifica que el array se actualiza correctamente
  }

}
