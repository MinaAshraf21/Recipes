import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MealsService {
  constructor(private readonly httpClient: HttpClient) {}

  getMeals(cat: string): Observable<any> {
    if (cat == 'all') {
      return this.httpClient.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s`
      );
    } else {
      return this.httpClient.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`
      );
    }
  }
  getCategories(): Observable<any> {
    return this.httpClient.get(
      `https://www.themealdb.com/api/json/v1/1/list.php?c=list`
    );
  }
}
