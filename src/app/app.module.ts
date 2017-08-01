import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { ServerComponent } from "./server/server.component";
import { ServersComponent } from './servers/servers.component';
import { SuccessAlertComponent } from "app/alerts/success/success-alert.component";
import { WarningAlertComponent } from "app/alerts/warning/warning-alert.component";
import { AlertsComponent } from "app/alerts/alerts.component";
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    AlertsComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    UsersComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
