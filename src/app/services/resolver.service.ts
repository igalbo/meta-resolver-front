import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ResolverService {
  private apiUrl = 'https://metadata-scraper-igal.herokuapp.com/api';

  constructor(private http: HttpClient) { }

  getMetadata(siteUrl: string) {
    return this.http.get(`${this.apiUrl}/${siteUrl}`);
  }
}
