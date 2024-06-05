import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { EcoleDoctoraleComponent } from "./pages/ecole-doctorale/ecole-doctorale/ecole-doctorale.component";
import { EditEcoleDoctoraleComponent } from "./pages/ecole-doctorale/edit-ecole-doctorale/edit-ecole-doctorale.component";
import { CreateEcoleDoctoraleComponent } from "./pages/ecole-doctorale/create-ecole-doctorale/create-ecole-doctorale.component";
import { SectionsComponent } from './pages/sections/sections/sections.component';
import { EditSectionComponent } from './pages/sections/edit-section/edit-section.component';
import { CreateSectionComponent } from './pages/sections/create-section/create-section.component';
import { SchedulesComponent } from './pages/schedules/schedules/schedules.component';
import { CreateScheduleComponent } from './pages/schedules/create-schedule/create-schedule.component';
import { EditScheduleComponent } from './pages/schedules/edit-schedule/edit-schedule.component';
import { GroupesComponent } from './pages/groupes/groupes/groupes.component';
import { CreateGroupeComponent } from './pages/groupes/create-groupe/create-groupe.component';
import { EditGroupeComponent } from './pages/groupes/edit-groupe/edit-groupe.component';
import { PdfViewComponent } from './pages/pdf-view/pdf-view.component';
import { AnnoncesComponent } from './pages/annonces/annonces/annonces.component';
import { CreateAnnonceComponent } from './pages/annonces/create-annonce/create-annonce.component';
import { EditAnnonceComponent } from './pages/annonces/edit-annonce/edit-annonce.component';
import {EditorModule} from "@tinymce/tinymce-angular";

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        SidebarComponent,
        FooterComponent,
        DashboardComponent,
        EcoleDoctoraleComponent,
        EditEcoleDoctoraleComponent,
        CreateEcoleDoctoraleComponent,
        SectionsComponent,
        EditSectionComponent,
        CreateSectionComponent,
        SchedulesComponent,
        CreateScheduleComponent,
        EditScheduleComponent,
        GroupesComponent,
        CreateGroupeComponent,
        EditGroupeComponent,
        PdfViewComponent,
        AnnoncesComponent,
        CreateAnnonceComponent,
        EditAnnonceComponent
    ],
    imports: [
        RouterModule.forRoot(routes),
        BrowserModule,
        HttpClientModule,
        FormsModule,
        BrowserModule,
        EditorModule
    ],
    providers: [

    ],
    bootstrap: [
        AppComponent
    ]

})

export class AppModule { }
