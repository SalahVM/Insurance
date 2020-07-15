import { BrowserModule } from '@angular/platform-browser';
import { NgModule, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Routes,RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DoctorComponent } from './doctor/doctor.component';
import { AgentComponent } from './agent/agent.component';
import { ServerComponent } from './server/server.component';
import { HeaderComponent } from './header/header.component';
import { AgentnewComponent } from './doctor/agentnew/agentnew.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    AgentComponent,
    ServerComponent,
    HeaderComponent,
    AgentnewComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
