import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/interfaces/book';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit() {
  }

  addBook(formValues: any): void {
    const newBook: Book = <Book>formValues;
    console.log(newBook);

    this.bookService.add(newBook)
      .subscribe(
        (data: Book) => console.log(data),
        (err: any) => console.log(err),
        () => this.router.navigate(['/books'])
      );
  }
}
