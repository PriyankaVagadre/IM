import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule} from '@ngrx/store'
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersModule } from './customers/customers.module';
import {  StoreDevtoolsModule} from "@ngrx/store-devtools";
import { MyCounterComponent } from './my-counter/my-counter.component';
import { counterReducer } from './my-counter/counter.reducers';
import { NewProjectComponent } from './new-project/new-project.component';
import { newProjectReducer } from './new-project/store/new-project.reducer';
import { ReadComponent } from './new-project/read/read.component';
import { CreateComponent } from './new-project/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    MyCounterComponent,
    NewProjectComponent,
    ReadComponent,
    CreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // StoreModule.forRoot({count : counterReducer}),
    StoreModule.forRoot({tutorial : newProjectReducer}), //for new project
    CustomersModule,
    StoreDevtoolsModule.instrument(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
