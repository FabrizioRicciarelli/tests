import { Component, Input, ViewEncapsulation, ViewChild } from '@angular/core';

@Component({
  selector: 'ngx-datatable-row-details',
  templateUrl: './row-details.component.html',
  styleUrls: ['./row-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RowDetailsComponent {

  @ViewChild('myTable') table: any;
  @Input() requestID: number;

  rows: any[] = [];
  expanded: any = {};
  timeout: any;

  constructor() {
    this.fetch((data) => {
      this.rows = data;
    });
  }

  onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => { console.log('paged!', event); }, 100);
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `http://localhost:3001/ngxdatatable`);
    req.onload = () => { cb(JSON.parse(req.response)); };
    req.send();
  }

  toggleExpandRow(row) {
    console.log('Toggled Expand Row!', row);
    this.table.rowDetail.toggleExpandRow(row);
  }

  onDetailToggle(event) {
    console.log('Detail Toggled', event);
  }
}
