import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListAgendaComponent } from './list-agenda/list-agenda.component';
import { MiniComponent } from './list-agenda/mini/mini.component';
import { ListadoComponent } from './list-agenda/listado/listado.component';
import { ItemsComponent } from './list-agenda/listado/items/items.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ListAgendaComponent,
    MiniComponent,
    ListadoComponent,
    ItemsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
