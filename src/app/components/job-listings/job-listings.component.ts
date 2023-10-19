import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Job } from 'src/app/interfaces/job.interface';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-job-listings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-listings.component.html',
  styleUrls: ['./job-listings.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class JobListingsComponent {
  @Input() jobListings$: Observable<Job[]> = of([]);
  @Output() onSelectFilter = new EventEmitter<string>();
}
