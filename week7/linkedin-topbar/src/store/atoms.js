import axios from 'axios'
import { atom, selector } from 'recoil'

export const notifications = atom({
    key: "notifications",
    default: selector({
        key: "notificationAtomSelector",
        get: async () => {
            const res = await axios.get("https://sum-server.100xdevs.com/notifications")
            return res.data
        }
    })
})

export const totalNotifications = selector({
    key: 'totalNotifications',
    get: ({get}) => {
        //dependency
        const total = get(notifications)

        return notifications.jobs+notifications.messaging+notifications.network+notifications.notifications

    }
})

// export const networkAtom = atom({
//      key: "networkAtom",
//      default: 104
// });

// export const jobsAtom = atom({
//     key: "jobsAtom",
//     default: 0
// });

// export const msgAtom = atom({
//     key: "msgAtom",
//     default: 2
// });

// export const notificationAtom = atom({
//     key: "notificationAtom",
//     default: 11
// });