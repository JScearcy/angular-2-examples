import { Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

export class ForItem {
    constructor(private listItem: any) {}
}

@Directive({
    /* tslint:disable */
    selector: '[for]'
    /* tslint:enable */
})
export class SampleNgForDirective {
    @Input('for')
        set for(list: any[]) {
            list.map(item => {
                this.viewContainerRef.createEmbeddedView(this.templateRef, new ForItem(item));
            });
        }

    constructor(
        private templateRef: TemplateRef<ForItem>,
        private viewContainerRef: ViewContainerRef
    ) {}
}
