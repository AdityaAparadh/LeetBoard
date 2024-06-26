import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './components/Profile'
import ProfileContainer from './components/ProfileContainer'
import Header from './components/Header'

function App() {
  const [users, setUsers] = useState(['adityaaparadh']);
  return (
    < div id="app">
      <ProfileContainer users={users} />
    </div>
  );
}


export default App
