import { ChangeDetectorRef, Component, DoCheck, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // Categories: any;
  selectedUsers: any[] = [];
  // rating: FormControl | any;
  form: FormGroup;
  // isEmpty: boolean = false;
  // pricesFilters = [
  //   { id: 1, name: 'Price 100 → 300', min: 100, max: 300 },
  //   { id: 2, name: 'Price 200 → 400', min: 200, max: 400 },
  //   { id: 3, name: 'Price 300 → 500', min: 300, max: 500 },
  //   { id: 4, name: 'Price 400 → 600', min: 400, max: 600 },
  //   { id: 5, name: 'Price 500 → 700', min: 500, max: 700 },
  //   { id: 6, name: 'Price 600 → 800', min: 600, max: 800 },
  // ];
  // products: any = [];
  selectedPrices: any[] = [];
  altSelectedPrices: any[] = [];
  // searchKey = '';
  constructor(
    // private CategoriesService: CategoriesService,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private router: Router,

    
  ) {
    this.form = this.fb.group({
      rating: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.getAllCategories();
 
  }
  getAllProducts(){

  }
  getAllCategories() {

  }
  sendNotificationForSpecificUsers(event: any, id: any) {
 
  }
  filterprices(event: any, item: any) {
  }
}
