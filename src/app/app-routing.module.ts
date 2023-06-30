import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageCardsComponent } from './page-cards/page-cards.component';
import { PagePenduComponent } from './page-pendu/page-pendu.component';

const routes: Routes = [
  {path:'', component: PageHomeComponent},
  {path:'detail/:name', component: PageCardsComponent},
  {path:'pendu', component: PagePenduComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
