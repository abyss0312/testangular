import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CategoryModel } from '../models/category.interface';
import { GenericResponse } from '../models/GenericResponse.interface';
import { HttpService } from '../shared';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpService) { }


  getCategories():Observable<GenericResponse<CategoryModel[]>>{
    return this.http.getAll<GenericResponse<CategoryModel[]>>('/categories?populate=*');
  }
}
