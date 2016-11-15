import { Component, Input } from '@angular/core';

import { TableData, TableRow } from '../models';

@Component({
    selector: 'app-sortable-table',
    templateUrl: './sortable-table.component.html',
    styleUrls: [ './sortable-table.component.css' ]
})
export class SortableTableComponent {
    @Input()
        get tableData() {
            return this.internalTableData;
        }
        set tableData(tableData: TableData) {
            this.internalTableData = tableData;
        }
    private internalTableData: TableData;
    private sortDirection: number = 1;
    private sortIndex: number;

    get sortUp() {
        return this.sortDirection === 1;
    }

    get sortDown() {
        return this.sortDirection === -1;
    }

    sort(index: number) {
        [ this.sortIndex, this.sortDirection ] = this.trackSort(index);
        this.internalTableData.rows.sort((a, b) => this.sortHandler(a, b, index));
    }

    sortHandler(a: TableRow, b: TableRow, i: number): number {
        if (a.cells[i].data > b.cells[i].data) {
            return 1 * this.sortDirection;
        } else if (a.cells[i].data < b.cells[i].data) {
            return -1 * this.sortDirection;
        } else {
            return 0;
        }
    }

    trackSort(index: number): number[] {
        let updatedValues = [ index, 1 ];
        if (this.sortIndex === index && this.sortDirection === 1) {
            updatedValues[1] = -1;
        } else if (this.sortIndex === index && this.sortDirection === -1) {
            updatedValues[1] = 1;
        }
        return updatedValues;
    }
}
