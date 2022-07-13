import './sidebar.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function Sidebar() {
    const [cats, setCat] = useState([]);

    useEffect(() => {
        const getCat = async () => {
            const res = await axios.get('/categories');
            setCat(res.data);
        }
        getCat();
     }, []);
  return (
      <div className='sidebar'>
          <div className='sidebarItem'>
              <span className='sidebarTitle'>ABOUT ME</span>
              <img src='https://www.w3schools.com/howto/img_avatar.png' alt='profile' />
              <p>
                  I'm a software developer with a passion for building things that people love.
                  I'm currently working at <a href='https://www.linkedin.com/in/joshua-m-baker/'>Joshua Baker</a> as a software engineer.
              </p>
          </div>
          <div className='sidebarItem'>
              <span className='sidebarTitle'>CATEGORIES</span>
              <ul className='sidebarList'>
                  {cats.map(cat => (
                      <Link to={`/?cat=${cat.name}`} className='link'>
                            <li className='sidebarListItem'>
                                {cat.name}
                            </li>
                      </Link>
                  ))}
                  {/* <li className='sidebarListItem'>Life</li> */}
                  
              </ul>
          </div>
          <div className='sidebarItem'>
              <span className='sidebarTitle'>FOLLOW US</span>

              <div className='sidebarocial'> 
                <i className="sidebarIcon fa-brands fa-facebook"></i>
                <i className="sidebarIcon fa-brands fa-twitter"></i>
                <i className="sidebarIcon fa-brands fa-pinterest"></i>
                <i className="sidebarIcon fa-brands fa-instagram"></i>
              </div>

          </div>
          
      </div>
  )
}
