import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { CardPokemonComponent } from './card-pokemon/card-pokemon.component';
import { PageCardsComponent } from './page-cards/page-cards.component';
import { HttpClientModule } from '@angular/common/http';
import { PagePenduComponent } from './page-pendu/page-pendu.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent,
    CardPokemonComponent,
    PageCardsComponent,
    PagePenduComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
