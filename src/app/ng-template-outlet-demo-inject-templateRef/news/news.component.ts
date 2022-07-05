import { Component, Input, TemplateRef } from "@angular/core";


@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.scss']
})
export class NewsComponent {

    @Input() contents: any;
    // @Input('template') templateRef: TemplateRef<any>;
    @Input() template:TemplateRef<any>
    constructor() { }
    ngOnInit() {
        console.log('contents', this.contents);
        console.log('templateRef', this.template)
    }

    ngOnChanges() {
        console.log('ngOnChanges contents', this.contents);
        console.log('ngOnChanges templateRef', this.template)
    }
}