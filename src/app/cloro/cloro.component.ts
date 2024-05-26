import { Component } from '@angular/core';
import { CloroTableComponent } from './cloro-table/cloro-table.component';
@Component({
  selector: 'app-cloro',
  standalone: true,
  imports: [CloroTableComponent],
  templateUrl: './cloro.component.html',
  styleUrl: './cloro.component.css'
})
export class CloroComponent{}
