import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SortableTableComponent } from './components/sortable-table.component';
import { SampleNgForDirective } from '../sample-ng-for/directives/sample-ng-for';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ SortableTableComponent, SampleNgForDirective ],
    exports: [ SortableTableComponent ]
})
export class SortableTableModule {}
