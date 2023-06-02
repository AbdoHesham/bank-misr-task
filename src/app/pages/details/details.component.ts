import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  id: any;
  item: any;

  constructor(
    private _activedRoute: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.id = this._activedRoute.snapshot.params['id'];
    this.getProductById();
  }

  getProductById() {
 
  }
  quantity = 1;


}
