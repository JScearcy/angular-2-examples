import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TinyNgStore, StoreItem, TnsObservable } from 'tiny-ng-store/tiny-ng-store';
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
    inputs: TnsObservable<InputModel[]>;
    constructor(private store: TinyNgStore) {}

    addInput(form: NgForm, event: any) {
        event.preventDefault();
        let input = new InputModel(form.value.myInput, this.randomId());
        this.inputs.take(1).subscribe((s: InputModel[]) => this.store.UpdateItem({ name: 'inputs', data: [...s, input] }));
    }

    removeInput(id: number) {
        console.log(id);
        this.inputs.take(1).subscribe((s: InputModel[]) => {
            let newInputs = s.filter(inp => inp.id !== id);
            this.store.UpdateItem({ name: 'inputs', data: newInputs });
        });
    }

    randomId(): number {
        return Math.floor(Math.random() * 100000);
    }

    ngOnInit() {
        this.inputs = this.store
                .InsertItem({data: [], name: 'inputs' })
                .map((s: StoreItem): InputModel[] => s && s.data);
    }
}
