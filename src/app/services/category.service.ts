import { Injectable } from '@angular/core';
import { CrudService } from '../shared/crud-service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends CrudService<Category> {
  constructor(protected http: HttpClient) {
    super(http, `${environment.API}categories`);
  }
}
