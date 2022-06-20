import React, { Suspense, useState, lazy } from 'react';
import { Canvas, Camera, useFrame } from '@react-three/fiber';
import { Stage, OrbitControls } from '@react-three/drei';

import "./App.css"
import * as THREE from 'three';
import PersonIcon from '@mui/icons-material/Person';
import Model from "./components/Delonghi_kettle"


const App = () => {

  return (
    <div className='bicContainer'>
    <div className='smallInsideContainer'>
    <div className='smallConTextCon'>
    <div classname='smallIconComp'>
    <PersonIcon style={{backgroundColor:"blue", color:"white", borderRadius:"20px", height:"40px", width:"40px", marginLeft:"2rem"}} />
    </div>
  
    </div>
    
    <div className='leftSideContainer'>
    <Canvas
         dpr={[1, 2]} camera={{ fov: 75 }}
         style={{
        
           
            height: '100vh',
         }}
      >
         <ambientLight intensity={1.25} />
         <ambientLight intensity={0.1} />
         <directionalLight intensity={0.4} />
         <Suspense fallback={null}>
         <Stage environment={null} intensity={1} contactShadowOpacity={0.5} shadowBias={-0.0015}>
         <Model position={[0.025, -0.9, 1]} />
         </Stage>
            
         </Suspense>
         <OrbitControls enableZoom={false} />
      </Canvas>
    </div>

    </div>
      
      <div className='rightSideContainer'>
      <div className='rightPanelText'>
        <h3>Panels</h3>
      </div>
      <div className='rightButtonsContainer'>
         <h5 className='rightText'>Rotate</h5>
         <div className='rightButtonsButton'>
            <div >
            <button className='buttonCon' type='button'>Left</button>
            </div>
            <div>
            <button className='buttonCon' type='button'>Right</button>
            </div>
            
         </div>
      </div>
      <div className='rightButtonsContainer'>
         <h5 className='rightText'>Move</h5>
         <div className='rightButtonsButton'>
            <div >
            <mesh onClick={(e) => console.log(e)}>
            <button className='buttonCon' type='button'>Left</button>
            </mesh>
            
            </div>
            <div>
            <button className='buttonCon' type='button'>Right</button>
            </div>
            
         </div>
      </div>
    </div>
    </div>
  )
}

export default App;