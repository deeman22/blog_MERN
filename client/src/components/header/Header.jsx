import './header.css';

export default function Header() {
  return (
      <div className='header'>
          <div className='headerTitles'>
              <span className='headerTitleSm'> React & Node </span>
              <span className='headerTitleLg'> Blog </span>
          </div>
          <img className='headerImg' src='https://cdn.pixabay.com/photo/2019/09/18/07/09/meadow-4485609_1280.jpg' alt='logo'/>
      </div>
  )
}
