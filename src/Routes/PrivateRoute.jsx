import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";


export default function PrivateRoute({ children }) {
  
  // let data = useSelector(selector => selector)

  //  console.log(data.isAuth,"see value");
  const verify = localStorage.getItem("loginstatus")
  console.log(verify)
  
  if (verify == "false") {
    return <Navigate to="/"/>
  }
  return children;
}
