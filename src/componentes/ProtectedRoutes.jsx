import { Navigate, Outlet } from 'react-router-dom';
import swal from 'sweetalert'

const ProtectedRoutes = () => {

	const token= localStorage.getItem('token')	
    if(token){
        return <Outlet />
    } else { 
        swal({
            title:"You must log in",
            icon:"warning"
        })
        return <Navigate to='/login' />
    }
};   

export default ProtectedRoutes;