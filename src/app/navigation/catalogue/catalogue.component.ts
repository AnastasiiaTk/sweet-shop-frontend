import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Category} from '../../entity/category';
import {CategoryService} from '../../service/category.service';
import {ProductDTO} from '../../dto/ProductDTO';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  constructor(private productService: ProductService, private categoryService: CategoryService) {
  }

  categories: Category[];

  products: ProductDTO[];

  selectedCategoryId: number = null;

  ngOnInit() {
    this.getProducts();
    this.getCategories();
  }

  private getProducts(): void {
    this.productService.getProducts().subscribe((products: Array<ProductDTO>) => {
      this.products = products;
    }, error => {
      console.log(error);
    });
  }

  getCategories(): void {
    this.categoryService.getCategories()
      .subscribe((categories: Array<Category>) => {
        this.categories = categories;
      }, error => {
        console.log(error);
      });
  }

  filterByCategory(): void {
    if (this.selectedCategoryId) {
      this.productService.filterProductsByCategory(this.selectedCategoryId)
        .subscribe((products: Array<ProductDTO>) => {
          this.products = products;
        }, error => {
          console.log(error);
        });
      return;
    }
    this.getProducts();
  }


}
