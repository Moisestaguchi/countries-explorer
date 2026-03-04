import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-loading-spinner',
  standalone: true, 
  imports: [ CommonModule, MatProgressBarModule ],
  templateUrl: './loading-spinner.component.html',
  styleUrl: './loading-spinner.component.scss',
 
})
export class LoadingSpinnerComponent {

}
