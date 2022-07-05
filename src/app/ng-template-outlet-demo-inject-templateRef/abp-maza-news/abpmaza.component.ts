import { Component } from "@angular/core";


@Component({
    selector: 'app-abpmaza',
    templateUrl: './abpmaza.component.html',
    styleUrls: ['./abpmaza.component.scss']
})
export class ABPMazaComponent {

    contents = [
        {
            title:'[ABP MAZA] angular us awsome',
            description:'Angular is great framework to build all kind of application',
            img:'Sandip'
        },
        {
            title:'[ABP MAZA] angular us great',
            description:'Angular is great framework to build all kind of application',
            img:'Sandip'
        }
    ];

    constructor() { }
    ngOnInit() { }


}