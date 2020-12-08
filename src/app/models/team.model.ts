import { IChannel } from "./channel.model";

export interface ITeam{
    name : string;
    channels: Array<IChannel> 
}