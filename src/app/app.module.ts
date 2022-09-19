import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { BoardComponent } from './components/card/board/board.component';
import { DashboardComponent } from './components/card/dashboard/dashboard.component';
import { StatusComponent } from './components/card/status/status.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardComponent,
    BoardComponent,
    DashboardComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
