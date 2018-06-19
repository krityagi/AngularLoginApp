import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginformComponent } from './loginform/loginform.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { UserService } from './user.service';
import {AuthguardGuard} from './authguard.guard';
import { UserComponent } from './user/user.component';
import { NotfoundComponent } from './notfound/notfound.component';

const appRoutes:Routes = [
  {path:'', component: LoginformComponent},
  {path: 'users',
   // component:UserComponent,
    children: [
      {
        path:':name',
        component: UserComponent
      },
      {
        path: ':name/:id',
        component: UserComponent
      }
    ]},
  {path: 'dashboard',canActivate: [AuthguardGuard], component: DashboardComponent},
  {path: '**',component:NotfoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginformComponent,
    FooterComponent,
    DashboardComponent,
    UserComponent,
    NotfoundComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [UserService, AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
