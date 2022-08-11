import './App.css'
import{Routes, Route, HashRouter} from 'react-router-dom'
import {Home, Login, CreateUser, ProductDetails, Puchases} from './page'
import {LoadingScreen, NavBar, ProtectedRoutes} from './componentes'
import {useSelector} from 'react-redux'



function App() {
 
  const isLoading =useSelector(state=>state.isLoding)
  return (
    <div className="App">
      <HashRouter>
        <NavBar />
        { isLoading && <LoadingScreen />}
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/productdetails/:id' element={<ProductDetails />}/>
          <Route element={<ProtectedRoutes />}>
              <Route path='/puchases' element={<Puchases />} />
          </Route>
          <Route path='/createUser' element={<CreateUser />} />
        </Routes>
      </HashRouter>
      
    </div>
  )
}

export default App
