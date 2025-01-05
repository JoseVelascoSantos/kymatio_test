import type {Alert} from "./Alert.ts";
import type {Evolution} from "./Evolution.ts";
import type {Notification} from "./Notification.ts";
import type {Timeline} from "./Timeline.ts";

export interface User {
  id: string;
  first_name: string;
  last_name: string;
  avatar: string;
  evolution: Evolution[];
  alerts: Alert[];
  notifications: Notification[];
  timeline: Timeline[];
}
