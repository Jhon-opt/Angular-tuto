import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { NamePageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component'; // Importar AddCharacterComponent

@NgModule({
  declarations: [NamePageComponent],
  imports: [
    CommonModule,
    FormsModule, // Asegúrate de importar FormsModule aquí
    ListComponent,
    AddCharacterComponent // Asegúrate de importar el componente standalone aquí
  ],
  exports: [NamePageComponent]
})
export class DbzModule { }
