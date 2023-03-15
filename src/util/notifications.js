import * as PushAPI from "@pushprotocol/restapi";
import { PUSH_NOTIFICATIONS_ENV } from "./constants";

import * as PushAPI from "@pushprotocol/restapi";
import * as ethers from "ethers";

const Pkey = `0x${PK}`;
const _signer = new ethers.Wallet(Pkey);

const createUser = address => `eip155:42:${address}`


export const fetchNotifs = async(address) => {
    const notifications = await PushAPI.user.getFeeds({
        user: createUser(address),
        env: PUSH_NOTIFICATIONS_ENV
    });

    console.log('Notifications: \n', user, notifications);
}


// https://docs.push.org/developers/developer-guides/sending-notifications/using-epns-sdk-gasless
const sendNotification = async(address) => {
  try {
    const apiResponse = await PushAPI.payloads.sendNotification({
      signer: _signer,
      type: 1, // broadcast
      identityType: 2, // direct payload
      notification: {
        title: `[SDK-TEST] ${APP_NAME} notification TITLE:`,
        body: `[sdk-test] ${APP_NAME} notification BODY`
      },
      payload: {
        title: `[sdk-test] payload title`,
        body: `sample msg body`,
        cta: '',
        img: ''
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