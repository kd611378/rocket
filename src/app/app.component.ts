import { Component, OnInit } from '@angular/core';
import { AuthorService } from './author.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 authorList:any = []

  constructor(private authorService: AuthorService){

  }


  ngOnInit() {
    this.authorService.getAuthorsList().subscribe((data:any) => this.authorList = data)
  }
}
