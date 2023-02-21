import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesComponent } from './sections/cities/cities.component';
import { ContactComponent } from './sections/contact/contact.component';
import { MainComponent } from './sections/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cities', component: CitiesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
