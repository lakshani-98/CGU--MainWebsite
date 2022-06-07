import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVacanciesComponent } from './vacancies/add-vacancies/add-vacancies.component';
import { ListVacanciesComponent } from './vacancies/list-vacancies/list-vacancies.component';
import { ViewVacancyComponent } from './vacancies/view-vacancy/view-vacancy.component';
import { ApplyVacanciesComponent } from './vacancies/apply-vacancies/apply-vacancies.component';
import { AddUsersComponent } from './user-registration/add-users/add-users.component';

const routes: Routes = [
  
  {path: 'vacancies',
      children: [
        {path: '', component: ListVacanciesComponent},
        {path: 'list', component: ListVacanciesComponent},
        {path: 'view/:vacancyId', component: ViewVacancyComponent},
        {path: 'create', component: AddVacanciesComponent},
        {path: 'apply/:vacancyId', component:  ApplyVacanciesComponent},
      ]
    },

    {path: 'user-registration',
    children: [
      {path: 'create', component: AddUsersComponent},
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
