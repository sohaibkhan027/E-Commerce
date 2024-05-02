import { useSelector } from 'react-redux';
import AdminLogin from '../admin/AdminLogin';



const AdminProRoute = ({ Component }) => {
  const tokens = useSelector(state => state.auth.token);
  const user = useSelector(state => state.auth.user);
  console.log("usersss",user.data);
//  useDispatch();

  
  const RenderComponent = tokens ? <Component /> : <AdminLogin /> ;

  return RenderComponent;

}


export default AdminProRoute;
