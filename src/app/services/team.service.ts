import { Injectable } from '@angular/core';
import { IChannel } from 'app/models/channel.model';
import { ITeam } from 'app/models/team.model';

@Injectable()
export class TeamService {
    teams: Array<ITeam> = []
    constructor() { }

    add(team: ITeam) {
        this.teams.push(team);
    }

    addChannel(indexTeam: number, channel: IChannel) {
        this.teams[indexTeam].channels.push(channel)
    }

    sortChannels(indexTeam: number, ascending: boolean) {
        this.teams[indexTeam].channels = this.teams[indexTeam].channels.sort((a, b) => {

            if (ascending) {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
            } else {
                if (a.name > b.name) {
                    return -1;
                }
                if (a.name < b.name) {
                    return 1;
                }
            }
            return 0;
        })
    }

    deleteChannel(indexTeam: number, indexChannel:number){
        this.teams[indexTeam].channels.splice(indexChannel, 1)
    }

}