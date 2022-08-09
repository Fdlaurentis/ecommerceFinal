import './App.css'
import{Routes, Route, HashRouter} from 'react-router-dom'
import {Home, Login, ProductDetails, Puchases} from './page'
import {LoadingScreen, NavBar} from './componentes'
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
          <Route path='/puchases' element={<Puchases />} />
        </Routes>
      </HashRouter>
      
    </div>
  )
}

export default App
