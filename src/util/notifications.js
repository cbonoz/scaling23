import * as PushAPI from "@pushprotocol/restapi";
import { APP_ICON_URL, APP_NAME, PUSH_NOTIFICATIONS_ENV } from "./constants";
import * as ethers from "ethers";



const createUser = address => `eip155:42:${address}`


export const fetchNotifications = async (address) => {
  const user = createUser(address);
  const notifications = await PushAPI.user.getFeeds({
    user,
    env: PUSH_NOTIFICATIONS_ENV
  });

  console.log('Notifications: \n', user, notifications);
}


// https://docs.push.org/developers/developer-guides/sending-notifications/using-epns-sdk-gasless
const sendNotification = async (address, referee, redirectUrl) => {
  const notification = {
    title: `[SDK-TEST] ${APP_NAME}: Successful referral`,
    body: `[sdk-test] ${APP_NAME}: ${referee} has been successfully referred to ${redirectUrl}`,
  }

  // const Pkey = `0x${''}`;
  const _signer = new ethers.Wallet(address);

  try {
    const apiResponse = await PushAPI.payloads.sendNotification({
      signer: _signer,
      type: 1, // broadcast
      identityType: 2, // direct payload
      notification,
      payload: {
        ...notification,
        cta: '',
        img: APP_ICON_URL,
      },
      channel: createUser(address),
      env: PUSH_NOTIFICATIONS_ENV
    });
    console.log('push response', apiResponse)
  } catch (err) {
    console.error('Error: ', err);
  }
}

sendNotification();