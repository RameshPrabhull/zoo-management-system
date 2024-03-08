import {Link,Outlet} from "react-router-dom";
function Layout(){
    return(
        <>
        <h1>Zoo Management System</h1>
        <nav>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/customer">Customers Details</Link></li>
            {/* <li><Link to="/employee">Employee Details</Link></li> */}
            <li><Link to="/zoo">Zoo Details</Link></li>
            </ul>
        </nav>
        <Outlet/>
        </>
    )
};
export default Layout;