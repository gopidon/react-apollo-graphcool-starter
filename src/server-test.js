/**
 * Created by gopi on 1/14/17.
 */
import {
    isExponentPushToken,
    sendPushNotificationAsync,
} from 'exponent-server-sdk';

// To check if something is a push token
let isPushToken = isExponentPushToken('ExponentPushToken[0ji4k_BEKBN89b0K8M20cq]');
console.log("PushToken?", isPushToken);

// To send a push notification
(async function () {
   let res = await sendPushNotificationAsync({
        exponentPushToken: 'ExponentPushToken[0ji4k_BEKBN89b0K8M20cq]', // The push token for the app user you want to send the notification to
        message: "This is a test notification",
        data: {'withSome': 'data'},
    });
    console.log("Result is:", res)
})();