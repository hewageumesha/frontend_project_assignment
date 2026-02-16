import { Component, OnInit, signal } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('frontProjectAssignment');
  is_production = environment.PRODUCTION;
  ngOnInit(): void {
    if(this.is_production) {
      console.log('Running in production mode');
    } else {
      console.log('Running in development mode');
    }
  }
}
