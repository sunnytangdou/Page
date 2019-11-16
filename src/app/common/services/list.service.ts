import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TopListService {
  constructor(private http: HttpClient) {
  }
  topList() {
    return this.http.get('/api/top/list?idx=1');
  }
}
