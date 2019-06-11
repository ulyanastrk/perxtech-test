import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {BooksService} from '../../../core/providers/books.service';
import {Book} from '../../../core/models/book.model';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.scss']
})

export class TablePageComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'image', 'created_at', 'updated_at', 'authors'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatSort) sort: MatSort;

  constructor(private booksService: BooksService) {
  }

  ngOnInit() {
    this.booksService.getBooks().subscribe((books: Book[]) => this.dataSource.data = books);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
