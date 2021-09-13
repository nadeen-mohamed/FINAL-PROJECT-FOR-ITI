import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactProfileComponent } from './contact-profile/contact-profile.component';
import { ContactRegisterComponent } from './contact-register/contact-register.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
{path:'contactslist',component:ContactsListComponent},
{path:"contactprofile/:id",component:ContactProfileComponent},
{path: '', redirectTo: '/contactslist', pathMatch: 'full'},
{path:'contactregister',component: ContactRegisterComponent},
{path:'contactus',component: ContactUsComponent},
{path:'home',component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
