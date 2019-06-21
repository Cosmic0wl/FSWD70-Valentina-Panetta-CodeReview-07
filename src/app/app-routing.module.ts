import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ImportantNumbersComponent } from './important-numbers/important-numbers.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
{
	path: "", component: HomePageComponent

},{
	path: "importantNumbers", component: ImportantNumbersComponent
},{
	path: "form", component: ContactComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
