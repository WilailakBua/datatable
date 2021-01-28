import { Component, OnInit, AfterViewInit, ViewChild, Input } from '@angular/core';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
@Component({
  selector: 'lib-datatable-lib',
  templateUrl: 'datatable-lib.component.html',
  styleUrls: ['datatable-lib.component.css'],
  
})
export class DatatableLibComponent implements OnInit, AfterViewInit {

  constructor() { }

  pageEvent = new PageEvent();
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Input() data: any;
  @Input() displayedColumns: any;
  @Input() pageIndex: number;
  @Input() pageSize: number;

  columnsToDisplay: string[];
  homeShow = false;
  length: number;

    ngOnInit(): void {
      this.columnsToDisplay = this.displayedColumns.slice();
      
      console.log(this.displayedColumns);
      
      console.log(this.data);
      this.length = this.data.length;
      console.log(this.length);

      this.dataSource = new MatTableDataSource(this.data);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  
    this.dataSource.sort = this.sort;
  }


  applyFilter(event: Event) {

    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.sort = this.sort;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
