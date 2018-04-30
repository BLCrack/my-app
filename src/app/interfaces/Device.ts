import {User} from './User';
import {Location} from './Location';

export interface Device {

  id: number;
  connectionName: string;
  deviceName: string;
  historyDays: number;
  startConnection: Date;
  actualLocation: Location ;
  owner: User;
}
