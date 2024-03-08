import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { WelcomeRIDHIComponent } from './welcome-ridhi/welcome-ridhi.component';
import { AboutMainComponent } from './about-main/about-main.component';
import { ServicesMainComponent } from './services-main/services-main.component';
import { ContactManinComponent } from './contact-manin/contact-manin.component';



const routes: Routes = [
// Routing Path For Entire Application
{path:'',component:WelcomeRIDHIComponent},
{path:'Aboutus',component:AboutMainComponent},
{path:'Header',component:HeaderComponent},
{path:"Services",component:ServicesMainComponent},
{path:"Contact_Us",component:ContactManinComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


