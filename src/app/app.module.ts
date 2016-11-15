import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { TinyNgStore } from 'tiny-ng-store/tiny-ng-store';

import { AppComponent } from './app.component';
import { SortableTableModule } from './sortable-table/sortable-table.module';
import { NgrxExampleModule } from './ngrx-example/ngrx-example.module';
import { TngsExampleModule } from './tiny-ng-store-example/tngs-example.module';
import { inputReducer } from './ngrx-example/reducers/input.reducer';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SortableTableModule,
    NgrxExampleModule,
    TngsExampleModule,
    ReactiveFormsModule,
    StoreModule.provideStore({ inputs: inputReducer }, [])
  ],
  providers: [ TinyNgStore ],
  bootstrap: [AppComponent]
})
export class AppModule { }
