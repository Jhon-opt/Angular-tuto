import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'], // Corregido de styleUrl a styleUrls
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ListComponent {
  @Input()
  public CharacterList: Character[] = [{
    Name: 'Trunks',
    power: 10
  }];


  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {
    if (id) {
      this.onDelete.emit(id);
      console.log('Emitting deletion for ID:', id);
    } else {
      console.error("Character ID is undefined.");
    }
  }
}
