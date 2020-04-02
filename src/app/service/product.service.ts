import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {TokenService} from './token.service';
import {Product} from '../entity/product';
import {ProductDTO} from '../dto/ProductDTO';
import {IMAGE_TYPE} from '../global-properties';
import {PRODUCT_PAGE_SIZE} from '../global-properties';
import {DomSanitizer} from '@angular/platform-browser';
import {ProductPageDTO} from '../dto/productPageDTO';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private getProductsUrl: string = environment.apiUrl + '/api/getProducts';

  private getProductsPageUrl: string = environment.apiUrl + '/api/getProductsPage';

  private filterProductsUrl: string = environment.apiUrl + '/api/filterProducts/';

  private saveProductUrl: string = environment.apiUrl + '/admin/saveProduct';

  private saveProductWithImgUrl: string = environment.apiUrl + '/admin/saveProductWithImg';

  private productByIdUrl: string = environment.apiUrl + '/api/getProductById/';

  private deleteProductByIdUrl: string = environment.apiUrl + '/admin/deleteProduct';

  constructor(private httpClient: HttpClient, private tokenService: TokenService,
              private sanitizer: DomSanitizer) {
  }

  getProducts(): Observable<Array<ProductDTO>> {
    return this.httpClient.get<Array<ProductDTO>>(this.getProductsUrl);
  }

  getProductsPage(pageNumber: number): Observable<ProductPageDTO> {
    const pageIndex = pageNumber - 1;
    const httpParams = {'pageIndex': pageIndex.toString(), 'pageSize': PRODUCT_PAGE_SIZE};
    return this.httpClient.get<ProductPageDTO>(this.getProductsPageUrl, {params: httpParams});
  }

  filterProductsByCategory(categoryId: number): Observable<Array<ProductDTO>> {
    return this.httpClient.get<Array<ProductDTO>>(this.filterProductsUrl + categoryId);
  }

  saveProduct(product: Product): Observable<Product> {
    return this.saveProductRequest(product, this.saveProductUrl);
  }

  saveProductWithImg(product: Product, img: File): Observable<Product> {
    const formData = new FormData();
    formData.append('file', img);
    formData.append('editableProduct', JSON.stringify(product));
    return this.saveProductRequest(formData, this.saveProductWithImgUrl);
  }

  getProductById(productId: number): Observable<ProductDTO> {
    return this.httpClient.get<ProductDTO>(this.productByIdUrl + productId);
  }

  deleteProductById(product: Product): Observable<void> {
    return this.httpClient.post<void>(this.deleteProductByIdUrl, product, {headers: this.tokenService.getHttpHeadersWithToken()});
  }

  getProductImage(product: ProductDTO): any {
    return this.sanitizer.bypassSecurityTrustUrl(IMAGE_TYPE + product.imageContent);
  }

  private saveProductRequest(requestBody: any, saveProductUrl: string): Observable<Product> {
    return this.httpClient.post<Product>(saveProductUrl, requestBody, {headers: this.tokenService.getHttpHeadersWithToken()});
  }

}
