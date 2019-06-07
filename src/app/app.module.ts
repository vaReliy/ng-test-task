import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormComponent} from './components/form/form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {TableComponent} from './components/table/table.component';
import {HttpClientModule} from '@angular/common/http';
import {ApiService} from './service/api.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
