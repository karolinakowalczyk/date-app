import { Activity } from './activity';
import { CustomTime } from './custom-time';

export interface Appointment {
  attractions?: Activity[];
  foods?: Activity[];
  date?: Date;
  time?: CustomTime;
}
