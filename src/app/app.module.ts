import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QueryBuilderModule } from "angular2-query-builder";
import { QueryBuilderComponent } from './query-builder/query-builder.component';
import { FvQueryBuilderComponent } from './fv-query-builder/fv-query-builder.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, QueryBuilderModule],
  declarations: [ AppComponent, QueryBuilderComponent, FvQueryBuilderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
