import { Component, Input } from '@angular/core';
import { Book } from '../helper-files/books-interface';
import { CardBookComponent } from '../card-book/card-book.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-list-book',
  standalone: true,
  imports: [CardBookComponent, FormsModule, CommonModule],
  templateUrl: './list-book.component.html',
  styleUrl: './list-book.component.scss'
})
export class ListBookComponent {
  @Input() BookLists:Book[] = [];

  ngOnInit():void{
    this.BookLists=[
      {
        id:1,
        title:"a book",
        description:"a book description",
        author:"abc",
        cover:"hard",
        price:43
      },
      {
        id:2,
        title:"b book",
        description:"b book description",
        author:"def",
        cover:"hard",
        price:78
      },
      {
        id:3,
        title:"c book",
        description:"c book description",
        author:"ghi",
        cover:"soft",
        price:12
      }
    
    ]
  }

  searchInput:string = "";
  contentExist:boolean = true;
  message:string = "";
  selectedTitle:string | null = null;
  check(){
    const foundBook = this.BookLists.find(book => book.title.toLowerCase() === this.searchInput.toLowerCase() || 
  book.description.toLowerCase() === this.searchInput.toLowerCase() ||
  book.author.toLowerCase() === this.searchInput.toLowerCase() || 
  book.cover.toLowerCase() === this.searchInput.toLowerCase())
  this.contentExist = !!foundBook; 
this.message = foundBook ? 'Book is avaiable' : "Book is not available";
  }

}
