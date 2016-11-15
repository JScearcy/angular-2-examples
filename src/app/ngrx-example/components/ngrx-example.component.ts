import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { InputModel } from '../models/input.model';
import { ADDINPUT, REMOVEINPUT } from '../reducers/input.reducer';

interface AppState {
    inputs: string[];
}

@Component({
    /* tslint:disable */
    selector: 'example-store-component',
    /* tslint:enable */
    templateUrl: './ngrx-example.component.html',
    styleUrls: [ './ngrx-example.component.css' ]
})
export class NgrxExampleComponent {
    inputs: Observable<string[]>;

    constructor(private store: Store<AppState>) {
        this.inputs = store.select('inputs');
     }

    addInput(form: NgForm, event: any) {
        event.preventDefault();
        let input = new InputModel(form.value.myInput, this.randomId());
        this.store.dispatch({ type: ADDINPUT, payload: input });
    }

    removeInput(id: number) {
        this.store.dispatch({ type: REMOVEINPUT, payload: id });
    }

    randomId(): number {
        return Math.floor(Math.random() * 100000);
    }
}
