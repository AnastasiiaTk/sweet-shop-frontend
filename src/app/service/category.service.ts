import {Injectable} from '@angular/core';
import {Category} from '../entity/category';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {TokenService} from './token.service';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  private categoryUrl: string = environment.apiUrl + '/api/getCategories';

  private rootCategoriesUrl: string = environment.apiUrl + '/admin/getRootCategories';

  private saveCategoriesUrl: string = environment.apiUrl + '/admin/saveCategory';

  private findSubcategoriesUrl: string = environment.apiUrl + '/admin/findSubcategories/';

  private deleteCategoryByIdUrl: string = environment.apiUrl + '/admin/deleteCategory';

  constructor(private httpClient: HttpClient, private tokenService: TokenService) {
  }

  getCategories(): Observable<Array<Category>> {
    return this.httpClient.get<Array<Category>>(this.categoryUrl);
  }

  getRootCategories(): Observable<Array<Category>> {
    return this.httpClient.get<Array<Category>>(this.rootCategoriesUrl, {headers: this.tokenService.getHttpHeadersWithToken()});
  }

  saveCategory(category: Category): Observable<Array<Category>> {
    return this.httpClient.post<Array<Category>>(this.saveCategoriesUrl, category, {headers: this.tokenService.getHttpHeadersWithToken()});
  }

  findSubcategories(categoryId: number): Observable<Array<Category>> {
    return this.httpClient.get<Array<Category>>(this.findSubcategoriesUrl + categoryId, {headers: this.tokenService.getHttpHeadersWithToken()});
  }

  deleteCategoryById(category: Category): Observable<void> {
    return this.httpClient.post<void>(this.deleteCategoryByIdUrl, category, {headers: this.tokenService.getHttpHeadersWithToken()});
  }
}
