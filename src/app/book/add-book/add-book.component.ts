import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/interfaces/book';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  addValueForm: FormGroup = new FormGroup({});
  constructor(private bookService: BookService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addValueForm = this.formBuilder.group({
      title: [''],
      author: [''],
      year: [''],
    });
  }

  addBook(): void {
    const title = this.addValueForm.get('title').value;
    const author = this.addValueForm.get('author').value;
    const year = this.addValueForm.get('year').value;

    const newBook: Book = {
      title: title,
      author: author,
      year: year,
    };

    this.bookService.add(newBook)
      .subscribe(
        (data: Book) => console.log(data),
        (err: any) => console.log(err),
        () => this.router.navigate(['/books'])
      );
  }
}
