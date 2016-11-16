import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// Import the exposed objects from the tiny-ng-store package
import { TinyNgStore, StoreItem, TnsState } from 'tiny-ng-store/tiny-ng-store';
import 'rxjs/add/operator/take';

import { InputModel } from '../../ngrx-example/models/input.model';

@Component({
    /* tslint:disable */
    selector: 'tngs-example',
    /* tslint:enable */
    templateUrl: './tngs-example.component.html',
    styleUrls: [ './tngs-example.component.css' ]
})
export class TngsExampleComponent implements OnInit {
    // Create a variable for TnsState
    inputs: TnsState<InputModel[]>;
    constructor(private store: TinyNgStore) {}
    // When an input is added, update the data store to match new data
    addInput(form: NgForm, event: any) {
        event.preventDefault();
        let input = new InputModel(form.value.myInput, this.randomId());
        let inputs;
        /****************** Note avoid updating the state within the subscribe block to avoid infinite loops *******************/
        // Extract current state from the store
        this.inputs.subscribe((s: InputModel[]) => {
            inputs = s;
        });
        // Update the store with the new state
        this.store.UpdateItem({ name: 'inputs', data: [...inputs, input] });
    }
    // When an input is set to be deleted, update the data store to match new data
    removeInput(id: number) {
        let inputs;
        /****************** Note avoid updating the state within the subscribe block to avoid infinite loops *******************/
        // Extract current state from the store
        this.inputs.subscribe((s: InputModel[]) => {
            inputs = s.filter(item => item.id !== id);
        });
        // Update the store with the new state
        this.store.UpdateItem({ name: 'inputs', data: inputs });
    }

    randomId(): number {
        return Math.floor(Math.random() * 100000);
    }

    ngOnInit() {
        // Add the inputs object into the store, and store the returned TnsState within the inputs variable
        this.inputs = this.store
                .InsertItem({data: [], name: 'inputs' })
                .map((s: StoreItem): InputModel[] => s && s.data);
    }
}
