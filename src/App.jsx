import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
// import AddClient from './pages/AddClient/AddClient'
// import * as clientService from './services/clientService'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import'./App.css'


const App = () => {
  const [user, setUser] = useState(null)
  // const [clients, setClients] = useState([])

  // const handleAddClient = async newClientData => {
  //   const newClient = await clientService.create(newClientData)
  //   setClients([...clients, newClient])
  // }

  return (
    <>
      <div className='App'>
      <>
      <NavBar user={user} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
      </Routes>
    </>
      </div>
    </>
  )
}

export default App
//for navbar:
// user={user} handleLogout={handleLogout}

          // <Routes>
          //   <Route
          //   path="/addclient"
          //   element={<AddClient handleAddClient={handleAddClient}/>}
          //   />
          //   <Route
          //     path="/signup"
          //     element={<Signup handleSignupOrLogin={handleSignupOrLogin}/>}
          //   />
          //   <Route
          //     path="/login"
          //     element={<Login handleSignupOrLogin={handleSignupOrLogin}/>}
          //   />
          //   <Route
          //     path="/profiles"
          //     element={user ? <Profiles /> : <Navigate to="/login" />}
          //   />
          //   <Route
          //     path="/changePassword"
          //     element={user ? <ChangePassword handleSignupOrLogin={handleSign.upOrLogin}/> : <Navigate to="/login" />}
          //   />
          // </Routes>