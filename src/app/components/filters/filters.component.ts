import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FiltersComponent {
  @Input() filters: string[] = [];
  @Output() onRemoveFilter = new EventEmitter<string>();
  @Output() onClearAllFilters = new EventEmitter();
}
