import * as PushAPI from "@pushprotocol/restapi";
import { PUSH_NOTIFICATIONS_ENV } from "./constants";


export const fetchNotifs = async(address) => {
    const user = `eip155:42:${address}`  // user address in CAIP-10
    const notifications = await PushAPI.user.getFeeds({
        user,
        env: PUSH_NOTIFICATIONS_ENV
    });

    console.log('Notifications: \n', user, notifications);
}
