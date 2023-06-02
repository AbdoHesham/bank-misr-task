import { Component, OnInit } from '@angular/core';

import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  // standalone: true,
  // imports: [NgbCollapseModule, RouterLink],
})
export class HeaderComponent implements OnInit {
  cartCount: any;
  constructor(
    private router: Router
  ) {
  }
  expanded = false;
  isMenuCollapsed = true;
  keyWord = '';

  // setKeyWord() {
  //   this.CategoriesService.searchWord.next(this.keyWord);
  // }
  // toggleExpanded() {
  //   this.expanded = !this.expanded;
  // }

  ngOnInit(): void {
    // this.CategoriesService.cartCount.subscribe((cartCount: number) => {
    //   this.cartCount = cartCount;
    // });
  }
  signIn() {
    // this.router.navigateByUrl('/auth/login')
  }
}
