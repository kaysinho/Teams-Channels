import { Component, OnInit, Input } from '@angular/core';
import { IChannel } from 'app/models/channel.model';
import { ITeam } from 'app/models/team.model';
import { TeamService } from 'app/services/team.service';

@Component({
  selector: 'app-team-component',
  templateUrl: './team-component.component.html',
  styleUrls: ['./team-component.component.css']
})
export class TeamComponent implements OnInit {
  // IMP - Implement addChannel and removeChannel operations within this component
  @Input() team: ITeam;
  @Input() teamIndex: number;
  currentIndex: number;
  currentState: number;
  channelName: string;
  ascending : boolean = true
  constructor(private service: TeamService) {

  }

  ngOnInit() {

  }

  formValidation():boolean {
    let name :any = this.channelName.trim()
    if (name==""){
      return false
    }

    if (Number.isInteger(name)){
      return false
    }

    return true;
  }


  removeChannel(index:number) {
    this.service.deleteChannel(this.teamIndex, index)
  }

  addChannel() {
    let channel : IChannel = { name : this.channelName }
    this.service.addChannel(this.teamIndex, channel)
    this.channelName = ""
  }

  sort() {
    this.service.sortChannels(this.teamIndex, this.ascending)
    this.ascending = !this.ascending
  }

}
