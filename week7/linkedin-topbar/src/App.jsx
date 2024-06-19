import { useEffect } from 'react'
import './App.css'
import { notifications, totalNotifications } from './store/atoms'
import {useRecoilValue, RecoilRoot, useRecoilState } from 'recoil'
import axios from 'axios'
function App() {

  return (
    <RecoilRoot>
      <TopBar/>
      </RecoilRoot>
  )
}

function TopBar(){
  const [notificationCount, setNotificationCount] = useRecoilState(notifications)
  //const totalCount = useRecoilValue(totalNotifications)

  

    return <div>
    <button>Home</button>
    <button>My Network ({notificationCount.network>=100? "99+" : notificationCount.network})</button>
    <button>Jobs {notificationCount.jobs}</button>
    <button>Messaging {notificationCount.messaging}</button>
    <button>Notifications {notificationCount.notifications}</button>
  
    {/* <button>Me {totalCount}</button> */}
  </div>
}

export default App
