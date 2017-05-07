import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './shared/router';

import { AppComponent } from './app.component';
import { TableDataComponent } from './shared/tableData.component';

@NgModule({
  declarations: [
    AppComponent,
    TableDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
      HttpModule,
      routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
