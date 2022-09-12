import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module'
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from './components/home/home.component';
import { SeatingAreaComponent } from './components/seating-area/seating-area.component';
import { CartComponent } from './components/cart/cart.component';
import { ItemsComponent } from './components/items/items.component';
import { FormsModule } from '@angular/forms';



// const appRoutes: Routes = [
//   {path: '', component: HomeComponent},
//   {path: 'item', component: ItemsComponent},
//   {path: 'cart', component: CartComponent}
  
// ]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SeatingAreaComponent,
    CartComponent,
    ItemsComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
