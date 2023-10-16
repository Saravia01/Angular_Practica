import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import{RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card'
import { AppComponent } from './app.component';
import { IncioComponent } from './incio/incio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LoginComponent } from './login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';




const appRoutes: Routes=[
  {path:'inicio',component:IncioComponent},
  {path:'nosotros',component:NosotrosComponent},
  {path: 'login', component:LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    IncioComponent,
    NosotrosComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing:true}
    ),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
