import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorComponent } from './doctor/doctor.component';
import { AgentComponent } from './agent/agent.component';
import { HomeComponent } from './home/home.component'


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'doctors', component: DoctorComponent },
  { path: 'agents', component: AgentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
