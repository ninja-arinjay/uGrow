import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
import './Landing.css';

function Landing() {
  return (
    <div className='container'>
      <p></p>
      <p>Ugrow is a powerful platform designed to help individuals enhance their skill set by leveraging the vast array of educational tutorials available on YouTube. It provides a streamlined and efficient learning experience by curating and organizing tutorials from various sources, allowing users to easily explore and access valuable educational content.</p>
      <p>One of the standout features of Ugrow is its ability to track users' progress as they navigate through the tutorials. By keeping track of completed tutorials and providing a visual representation of their progress, Ugrow empowers learners to monitor their growth and stay motivated on their learning journey.</p>
      <p>Ugrow was developed by Arinjay Panwar, an innovative individual passionate about empowering others through education and skill development. For any queries, issues, or feedback, he can be contacted at <span style={{ fontWeight: 'bold', color: 'blue' }}>apanwar2@stevens.edu</span>. We are committed to providing support and ensuring a seamless learning experience for users.</p>
      <p></p>
      <NavLink to='/home' style={{ color: 'red' }}>Click here to go back to the Home page</NavLink>
    </div>
  );
  
}

export default Landing;
