import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequestInterceptor } from './request.interceptor';
import { DataService } from './service/data.service';
import { TodosComponent } from './todos/todos.component';

@NgModule({
  declarations: [	
    AppComponent,
    TodosComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true}, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
