import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:1000/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF+user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}




// import './topbar.css';
// import { Link } from 'react-router-dom';
// import { useContext } from 'react';
// import { Context } from '../../context/Context.js';

// export default function TopBar() {
//     const { user, dispatch } = useContext(Context);

//     const handleLogout = () => { 
//         dispatch({ type: 'LOGOUT' });
//     }
//     //(user && console.log({ hello: "Hello ", user }));

//     const PF = "http://localhost:1000/images/";
//     //console.log({hi:"aidfbvebv",user});
//     return (
//         <div className='top'>
//             <div className='topLeft'>
//                 <i className="topIcon fa-brands fa-facebook"></i>
//                 <i className="topIcon fa-brands fa-twitter"></i>
//                 <i className="topIcon fa-brands fa-pinterest"></i>
//                 <i className="topIcon fa-brands fa-instagram"></i>
//             </div>
//             <div className='topCenter'>
//                 <ul className='topList'>
//                     <li className="topListItem">
//                         <Link className='link' to='/' >HOME</Link>
//                     </li>
//                     <li className="topListItem">
//                         <Link className='link' to='/' >ABOUT</Link>
//                     </li>
//                     <li className="topListItem">
                        
//                         <Link className='link' to='/' >CONTACT</Link>
//                     </li>
//                     <li className="topListItem">
//                         <Link className='link' to='/write' >BLOG</Link>
//                     </li>
//                     <li className="topListItem" onClick={handleLogout}>
//                         {user && 'LOGOUT'}
//                     </li>
//                 </ul>
//             </div>
//             <div className='topRight'>
                
//                 { user ? (
                   
//                     <Link to='/settings' >
//                         <img
//                             className='topImg'
//                             //src = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
//                             //img doesn't work
//                             src={PF+user.profilePic}
//                             alt=''     
//                         />
//                     </Link>
                   
//                     ) : (
//                             <ul className='topList'>
//                                 <li className="topListItem">
//                                     <Link className='link' to='/login' >LOGIN</Link>
//                                 </li>
//                                 <li className="topListItem">
//                                    <Link className='link' to='/register' >REGISTER</Link>
//                                 </li>
//                             </ul>
//                     )
//                 }
//                 <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
//             </div>
          
//         </div>
//     );
// }
