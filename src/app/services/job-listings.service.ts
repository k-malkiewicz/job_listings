import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from '../interfaces/job.interface';

@Injectable({
  providedIn: 'root'
})
export class JobListingsService {
  private readonly DATA_URL = '../../assets/data.json';

  constructor(private http: HttpClient) { }

  get(): Observable<Job[]> {
    return this.http.get<Job[]>(this.DATA_URL);
  }
}
