import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './components/Profile'
import ProfileContainer from './components/ProfileContainer'

function App() {
  const [users, setUsers] = useState(['adityaaparadh','yashkiran2004','Quanta6']);
  return (
    <>
      <ProfileContainer users={users} />
    </>
  );
}


export default App
