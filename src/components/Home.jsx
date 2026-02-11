import React from 'react'
import Orb from './Orb';
import NavBar from './NavBar';

const Home = () => {
  return (

<div>
<NavBar/>
<div style={{ width: '100%', height: '750px', position: 'relative' }}>
  <Orb
    hoverIntensity={2}
    rotateOnHover
    hue={0}
    forceHoverState={false}
    backgroundColor="#000000"
/>
    </div>

</div>
  )
}

export default Home