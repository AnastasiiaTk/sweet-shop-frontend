import {Component, OnInit, ViewChild} from '@angular/core';
import {Category} from '../../entity/category';
import {Product} from '../../entity/product';
import {ProductService} from '../../service/product.service';
import {CategoryService} from '../../service/category.service';
import {ModalDirective} from 'ngx-bootstrap';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductDTO} from '../../dto/ProductDTO';
import {ProductPageDTO} from '../../dto/productPageDTO';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {

  constructor(private productService: ProductService, private categoryService: CategoryService) {
  }

  categories: Category[];

  selectedCategoryId: number = null;

  products: ProductDTO[] = new Array();

  pageAmount = 1;

  currentPage = 1;

  editableProductDTO: ProductDTO = new ProductDTO();

  editableCategory: Category = new Category();

  productToDelete: Product = null;

  uploadedFile: File;

  errorMsg: string;

  @ViewChild('productDialog') childModal: ModalDirective;

  productImgForm = new FormGroup({
    uploadImage: new FormControl('')
  });

  ngOnInit() {
    this.getProducts();
    this.getCategories();
    this.fillEmptyEditableProduct();
  }

  getProducts(): void {
    this.productService.getProductsPage(this.currentPage)
      .subscribe((productsPage: ProductPageDTO) => {
        this.products = productsPage.productsDTO;
        this.pageAmount = productsPage.totalAmount;
      }, error => {
        console.log(error);
      });
  }

  loadPage(pageNumber: number): void {
      this.getProducts();
  }

  getCategories(): void {
    this.categoryService.getCategories()
      .subscribe((categories: Array<Category>) => {
        this.categories = categories;
        this.editableProductDTO.product.category = this.categories[0];
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

  saveProduct(): void {
    this.editableProductDTO.product.category = this.editableCategory;
    if (this.uploadedFile) {
      this.editableProductDTO.product.photoPath = this.uploadedFile['name'];
      this.productService.saveProductWithImg(this.editableProductDTO.product, this.uploadedFile).subscribe(
        (data) => {
          this.getProducts();
        });
    } else {
      this.productService.saveProduct(this.editableProductDTO.product).subscribe(
        (data) => {
          this.getProducts();
        });
    }
    this.hideChildModal();
  }

  deleteProduct() {
    this.productService.deleteProductById(this.productToDelete).subscribe(() => {
        this.getProducts();
      },
      error => {
        this.errorMsg = error.error.message;
        console.log(error);
      });
    this.hideChildModal();
  }

  openDeleteProductForm(product: Product) {
    this.productToDelete = product;
    this.openChildModal();
  }

  openAddProductForm() {
    this.fillEmptyEditableProduct();
    this.productToDelete = null;
    this.openChildModal();
  }


  openChildModal(): void {
    this.childModal.show();
    this.getCategories();
  }

  hideChildModal(): void {
    this.childModal.hide();
    this.fillEmptyEditableProduct();
    this.productImgForm.controls.uploadImage.reset();
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadedFile = file;
    }
  }

  openEditProductForm(dto: ProductDTO) {
    this.productToDelete = null;
    const product: Product = new Product();
    product.productId = dto.product.productId;
    product.name = dto.product.name;
    product.price = dto.product.price;
    this.editableCategory = dto.product.category;
    product.category = dto.product.category;
    product.photoPath = dto.product.photoPath;
    product.description = dto.product.description;
    product.available = dto.product.available;
    this.editableProductDTO.product = product;
    this.editableProductDTO.imageContent = dto.imageContent;
    this.openChildModal();
  }

  private fillEmptyEditableProduct(): void {
    this.editableProductDTO.product = new Product();
    this.editableProductDTO.product.category = new Category();
    this.editableProductDTO.imageContent = null;
    this.uploadedFile = null;
    this.editableCategory = new Category();
  }

}
