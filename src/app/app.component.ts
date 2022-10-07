import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { AuthorService } from './author.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  @ViewChild('concernedDiv') concernedDiv: ElementRef;
  authorList: any = [];
  hiddenItems: any = {};

  changeOpacity: boolean = false;
  active:boolean = false;

  constructor(private authorService: AuthorService) {}

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 100) {
      this.changeOpacity = true;
    } else {
      this.changeOpacity = false;
    }

  }

  ngOnInit() {
    this.authorService
      .getAuthorsList()
      .subscribe(
        (data: any) =>
          (this.authorList = data.map((item) => ({ ...item, show: false })))
      );
  }

  trackById(index: number, item:{id: string}) {
    return item.id;
  }

  toggleExpansion(index) {
    this.active = !this.active;
  }

  show() {
    this.concernedDiv.nativeElement.classList.add('_Menus-show')
  }

  hide() {
    this.concernedDiv.nativeElement.classList.remove('_Menus-show')
  }
}
