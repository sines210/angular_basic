import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppareilService } from './services/appareil.service';
import { AuthService } from './services/auth.service';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { RouterModule, Router, Routes, NavigationExtras } from '@angular/router';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from './services/auth-guard.service'

const appRoutes:Routes = [
  {path :  'appareils', canActivate: [AuthGuard], component: AppareilViewComponent},
  {path :  'appareils/:id', canActivate: [AuthGuard], component: SingleAppareilComponent},
  {path : 'auth', component: AuthComponent},
  {path : '' , component: AuthComponent},
  {path : 'not-found' , component: FourOhFourComponent},
  {path : '**' , redirectTo:'/not-found'} //la wild card ** doit toujours se placer à la fin comme dernière route car sinon elle peut fonctionner pour toutes les routes qu'elle va précéder
]

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
    ],
  exports: [RouterModule],
  providers: [AppareilService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
