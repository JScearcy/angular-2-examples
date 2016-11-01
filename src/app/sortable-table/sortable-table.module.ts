import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SortableTableComponent } from './components/sortable-table.component';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ SortableTableComponent ],
    exports: [ SortableTableComponent ]
})
export class SortableTableModule {}
