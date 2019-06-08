import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormComponent} from './components/form/form.component';
import {TableComponent} from './components/table/table.component';
import {ApiService} from './service/api.service';
import {UsersComponent} from './components/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TableComponent,
    UsersComponent
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
