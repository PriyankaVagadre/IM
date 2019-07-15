import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule} from '@ngrx/store'
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersModule } from './customers/customers.module';
import {  StoreDevtoolsModule} from "@ngrx/store-devtools";
import { MyCounterComponent } from './my-counter/my-counter.component';
import { counterReducer } from './my-counter/counter.reducers';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    MyCounterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({count : counterReducer}),
    CustomersModule,
    StoreDevtoolsModule.instrument(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
