import { ActionReducer, Action } from '@ngrx/store';

import { InputModel } from '../models/input.model';

export const ADDINPUT = 'addInput';
export const REMOVEINPUT = 'removeInput';

export const inputReducer: ActionReducer<InputModel[]> = (state: InputModel[], action: Action) => {
    if (!state) { state = []; }
    switch (action.type) {
        case ADDINPUT:
            return [...state, action.payload];
        case REMOVEINPUT:
            return state.filter(input => input.id !== action.payload);
    }
};
