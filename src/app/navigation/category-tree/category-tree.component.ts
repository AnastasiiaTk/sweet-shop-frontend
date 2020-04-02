import {Component, OnInit, ViewChild} from '@angular/core';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../entity/category';
import {MatDialog} from '@angular/material';
import {ModalDirective} from 'ngx-bootstrap';

@Component({
  selector: 'app-category-tree',
  templateUrl: './category-tree.component.html',
  styleUrls: ['./category-tree.component.css']
})
export class CategoryTreeComponent implements OnInit {

  constructor(private categoryService: CategoryService, public dialog: MatDialog) {
  }

  categories: Category[];

  rootCategories: Category[];

  editableCategory: Category = new Category();

  parentEditNotAvailable: Boolean = false;

  categoryToDelete: Category = null;

  @ViewChild('categoryDialog') childModal: ModalDirective;

  @ViewChild('confirmDialog') confirmDialog: ModalDirective;

  errorMsg: string;

  getCategories(): void {
    this.categoryService.getCategories()
      .subscribe((categories: Array<Category>) => {
        this.categories = categories;
      }, error => {
        console.log(error);
      });
  }

  ngOnInit() {
    this.getCategories();
    this.getRootCategories();
    this.fillEmptyEditableCategory();
  }

  getRootCategories(): void {
    this.categoryService.getRootCategories()
      .subscribe((rootCategories: Array<Category>) => {
        this.rootCategories = rootCategories.filter(category => category.categoryId != this.editableCategory.categoryId);
      });
  }

  showChildModal(): void {
    this.getRootCategories();
    this.fillParentChangeAvailable();
    this.childModal.show();
  }

  openEditCategoryForm(selectedCategory: Category) {
    this.categoryToDelete = null;
    this.editableCategory.categoryId = selectedCategory.categoryId;
    this.editableCategory.name = selectedCategory.name;
    const categoryId = selectedCategory.parentCategory == null ? null : selectedCategory.parentCategory.categoryId;
    this.editableCategory.parentCategory.categoryId = categoryId;
    this.showChildModal();
  }

  openDeleteCategoryForm(categoryToDelete: Category) {
    this.categoryToDelete = categoryToDelete;
    this.showChildModal();
  }

  hideChildModal(): void {
    this.childModal.hide();
    this.fillEmptyEditableCategory();
  }

  saveCategory(): void {
    this.buildParentCategory();
    this.categoryService.saveCategory(this.editableCategory).subscribe(
      (data) => {
        this.getCategories();
        this.getRootCategories();
      });
    this.hideChildModal();
  }

  deleteCategory() {
    this.categoryService.deleteCategoryById(this.categoryToDelete).subscribe(() => {
        this.getCategories();
      },
      error => {
        this.errorMsg = error.error.message;
        console.log(error);
      });
    this.hideChildModal();
  }

  fillParentChangeAvailable(): void {
    if (this.editableCategory.categoryId == null) {
      this.parentEditNotAvailable = false;
      return;
    }
    this.categoryService.findSubcategories(this.editableCategory.categoryId).subscribe((subcategories: Array<Category>) => {
      this.parentEditNotAvailable = subcategories.length > 0;
    });
  }

  private fillEmptyEditableCategory(): void {
    this.editableCategory = new Category();
    this.editableCategory.parentCategory = new Category();
    this.editableCategory.parentCategory.categoryId = null;
  }

  private buildParentCategory(): void {
    this.editableCategory['parentCategoryId'] = null;
    const selectedParent = this.editableCategory.parentCategory.categoryId;
    if (selectedParent == null) {
      this.editableCategory.parentCategory = null;
    } else {
      this.editableCategory.parentCategory = new Category();
      this.editableCategory.parentCategory.categoryId = selectedParent;
    }
  }
}
