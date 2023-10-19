import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { JobListingsService } from './services/job-listings.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Job } from './interfaces/job.interface';
import { JobListingsComponent } from './components/job-listings/job-listings.component';
import { FiltersComponent } from './components/filters/filters.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NgFor, JobListingsComponent, FiltersComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  jobListings$!: Observable<Job[]>;
  filters: string[] = [];

  constructor(private jobListingsService: JobListingsService){}

  ngOnInit(): void {
    this.fetchJobListings();
  }

  fetchJobListings(): void {
    this.jobListings$ = this.jobListingsService.get();
  }

  selectFilter(filter: string): void {
    if (this.filters.indexOf(filter) === -1) {
      this.filters.push(filter);
      this.updateJobListings();
    }
  }

  removeFilter(filter: string): void {
    this.filters = this.filters.filter(el => el !== filter);
    this.updateJobListings();
  }

  clearAllFilters(): void {
    this.filters.length = 0;
    this.updateJobListings();
  }

  matchesFilters(job: Job): boolean {
    if (this.filters.length === 0) {
      return true;
    }
  
    const jobFilters = [job.role, job.level, ...job.languages, ...job.tools];

    return this.filters.every(filter => jobFilters.includes(filter));
  }

  updateJobListings(): void {
    this.jobListings$ = this.jobListings$.pipe(
      map(job => job.filter(job => this.matchesFilters(job)))
    )
  }
}
