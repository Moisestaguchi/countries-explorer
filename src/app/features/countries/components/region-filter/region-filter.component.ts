import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-region-filter',
  standalone: true,
  imports: [],
  templateUrl: './region-filter.component.html',
  styleUrl: './region-filter.component.scss'
})
export class RegionFilterComponent {
  @Output() regionChange = new EventEmitter<string>();
  @Output() sortChange = new EventEmitter<string>();

  onRegionChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.regionChange.emit(value);
  }

  onSortChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.sortChange.emit(value);
  }
}