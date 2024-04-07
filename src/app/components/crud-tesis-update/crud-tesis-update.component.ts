import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../../menu/menu.component'
import { AppMaterialModule } from '../../app.material.module';

@Component({
  standalone: true,
  imports: [AppMaterialModule, FormsModule, CommonModule, MenuComponent],
  selector: 'app-crud-tesis-update',
  templateUrl: './crud-tesis-update.component.html',
  styleUrls: ['./crud-tesis-update.component.css']
})
export class CrudTesisUpdateComponent {

}
