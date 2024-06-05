import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EcoleDoctoraleComponent } from './pages/ecole-doctorale/ecole-doctorale/ecole-doctorale.component';
import { CreateEcoleDoctoraleComponent } from './pages/ecole-doctorale/create-ecole-doctorale/create-ecole-doctorale.component';
import { EditEcoleDoctoraleComponent } from './pages/ecole-doctorale/edit-ecole-doctorale/edit-ecole-doctorale.component';
import {SectionsComponent} from "./pages/sections/sections/sections.component";
import {CreateSectionComponent} from "./pages/sections/create-section/create-section.component";
import {EditSectionComponent} from "./pages/sections/edit-section/edit-section.component";
import {SchedulesComponent} from "./pages/schedules/schedules/schedules.component";
import {CreateScheduleComponent} from "./pages/schedules/create-schedule/create-schedule.component";
import {EditScheduleComponent} from "./pages/schedules/edit-schedule/edit-schedule.component";
import { GroupesComponent } from './pages/groupes/groupes/groupes.component';
import { CreateGroupeComponent } from './pages/groupes/create-groupe/create-groupe.component';
import { EditGroupeComponent } from './pages/groupes/edit-groupe/edit-groupe.component';
import { PdfViewComponent } from './pages/pdf-view/pdf-view.component';
import {AnnoncesComponent} from "./pages/annonces/annonces/annonces.component";
import {CreateAnnonceComponent} from "./pages/annonces/create-annonce/create-annonce.component";
import {EditAnnonceComponent} from "./pages/annonces/edit-annonce/edit-annonce.component";
export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'ecole-doctorales',
    component: EcoleDoctoraleComponent
  },
  {
    path: 'ecole-doctorales/create',
    component: CreateEcoleDoctoraleComponent
  },
  {
    path: 'ecole-doctorales/edit/:id', // Corrected the placeholder syntax
    component: EditEcoleDoctoraleComponent
  },
  {
    path:'sections',
    component:SectionsComponent
  },
  {
    path:'sections/create',
    component:CreateSectionComponent
  },
  {
    path:'sections/edit/:id',
    component:EditSectionComponent
  },
  {
    path:'schedules',
    component:SchedulesComponent
  },
  {
    path:'schedules/create',
    component:CreateScheduleComponent
  },
  {
    path:'schedules/edit/:id',
    component:EditScheduleComponent
  },
  {
    path:'groups',
    component:GroupesComponent
  },
  {
    path:'groups/create',
    component:CreateGroupeComponent
  },
  {
    path:'groups/edit/:id',
    component:EditGroupeComponent
  },
  {
    path:'annonces',
    component:AnnoncesComponent
  },
  {
    path:'annonces/create',
    component:CreateAnnonceComponent
  },
  {
    path:'annonces/edit/:id',
    component:EditAnnonceComponent
  },
  {
    path:'pdfView',
    component:PdfViewComponent
  }
];
