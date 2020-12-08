import { Component, OnInit } from '@angular/core';
import { ITeam } from 'app/models/team.model';
import { TeamService } from 'app/services/team.service';


@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamList implements OnInit {

  teamName : string = "";
  constructor(private service : TeamService) { 
    
  }

  ngOnInit() {
    
  }

  formValidation():boolean {
    let name :any = this.teamName.trim()
    if (name==""){
      return false
    }

    if (Number.isInteger(name)){
      return false
    }

    return true;
  }


  addTeam() {
    if (this.formValidation()){
      let team : ITeam = { name: this.teamName, channels:[]}
      this.service.add(team)
      this.teamName = ""
    }
  }
}
