import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  showSearchBar: boolean = false;

  @Input() nomPerfil: string = '';
  @Input() srcPerfil: string = '';
  @Input() usrPerfil: string = '';

  @ViewChild('searchBar') searchBar!: ElementRef;

  constructor() {}

  changeSearchBar() {
    this.showSearchBar = !this.showSearchBar;
    if (this.showSearchBar) {
      setTimeout(() => {
        this.searchBar.nativeElement.focus();
      }, 1);
    }
  }
}
