import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListBookComponent } from './list-book/list-book.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListBookComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AngularExam';
}
