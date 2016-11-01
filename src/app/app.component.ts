import { Component } from '@angular/core';

import { TableData, TableRow, TableCell } from './sortable-table/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sortable table example';
  parentTableData: TableData = {
    headers: ['Col One', 'Col Two', 'Col Three'],
    rows: this.createRows(3)
  };

  createRows(amt: number): TableRow[] {
    let rows = [];
    let count = 0;
    while (count < amt) {
      rows = [...rows, this.tableRows([`col 1 data row ${count}`, `col 2 data row ${count}`, `col 3 date row ${count}`])];
      count++;
    }

    return rows;
  }

  tableRows(data: any[]): TableRow {
    let row = new TableRow();
    row.cells = data.map((r) => this.tableCells(r));
    return row;
  }

  tableCells(data: any): TableCell {
    return { data: data, type: 'mock' };
  }
}
