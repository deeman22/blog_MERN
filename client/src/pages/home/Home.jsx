import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import './home.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const location = useLocation();
  //console.log(location);

  useEffect(() => {
    const fetchPost = async () => {
      // fetch posts by user name
      const res = await axios.get(`/posts${location.search}`); //
      //console.log(res.data);
      setPosts(res.data);
    }
    fetchPost();
  }, [location.search]);

  return (
     <>
        <Header/>
        <div className='home'>
        <Posts posts={posts} />
          <Sidebar/>
        </div>
     </>
  )
}
