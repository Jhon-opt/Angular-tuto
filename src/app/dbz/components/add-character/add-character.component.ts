import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule // Asegúrate de importar FormsModule aquí
  ],
  templateUrl: './add-character.html',
  styleUrls: ['./add-character.component.css'], // Corregido de styleUrl a styleUrls
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCharacterComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    Name: '',
    power: 0
  };

  emitcharacter(): void {
    if (this.character.Name.trim().length === 0) return;
    this.onNewCharacter.emit(this.character);
    this.character = { Name: '', power: 0 };
  }
}
