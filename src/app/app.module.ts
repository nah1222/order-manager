import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { HomeComponent } from './components/home/home.component';
import { SeatingAreaComponent } from './components/seating-area/seating-area.component';
import { CartComponent } from './components/cart/cart.component';
import { ItemsComponent } from './components/items/items.component';
import { ItemObjectComponent } from './components/item-object/item-object.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'seating-area', component: SeatingAreaComponent},
  {path: 'cart', component: CartComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    HomeComponent,
    SeatingAreaComponent,
    CartComponent,
    ItemsComponent,
    ItemObjectComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
