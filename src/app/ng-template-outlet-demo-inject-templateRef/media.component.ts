import { Component } from "@angular/core";


@Component({
    selector: 'app-media',
    templateUrl: './media.component.html',
    styleUrls: ['./media.component.scss']
})
export class MediaComponent {

    selectedMediaChanel: string = ''
    constructor() { }

    ngOnInit() { }

    onMediaChange(_mediaChanel: string) {
        this.selectedMediaChanel = _mediaChanel;
    }



}