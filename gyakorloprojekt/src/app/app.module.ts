import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElsooldalComponent } from './elsooldal/elsooldal.component';
import { MasodikoldalComponent } from './masodikoldal/masodikoldal.component';

@NgModule({
  declarations: [
    AppComponent,
    ElsooldalComponent,
    MasodikoldalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
