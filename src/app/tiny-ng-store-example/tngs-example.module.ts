import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TngsExampleComponent } from './components/tngs-example.component';

@NgModule({
    imports: [ CommonModule, FormsModule ],
    declarations: [ TngsExampleComponent ],
    exports: [ TngsExampleComponent ]
})
export class TngsExampleModule {}
