import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ABPMazaComponent } from './ng-template-outlet-demo-inject-templateRef/abp-maza-news/abpmaza.component';
import { MediaComponent } from './ng-template-outlet-demo-inject-templateRef/media.component';
import { NewsComponent } from './ng-template-outlet-demo-inject-templateRef/news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    MediaComponent,
    ABPMazaComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
