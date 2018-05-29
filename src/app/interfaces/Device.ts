import {User} from './User';
import {Location} from './Location';

export interface Device {

  id: number;
  phoneNumber: string;
  connectionName: string;
  deviceName: string;
  startConnection: Date;
  actualLocation: Location ;
  owner: User;
}
