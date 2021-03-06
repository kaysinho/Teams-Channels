import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TeamList } from './components/team-list/team-list.component';
import { TeamComponent } from './components/team-component/team-component.component';
import { TeamService } from './services/team.service';

@NgModule({
  declarations: [
    AppComponent,
    TeamList,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
