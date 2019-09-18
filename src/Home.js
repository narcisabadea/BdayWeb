import React from 'react';
import Login from './Login.js'

export default function Home() {

  return (
    <div>
      <div>
        <img src="images/copil.jpg" alt="cover" id="hpCover"/>
        <div className="phoneContainer">
          <img src="images/s10.png" alt="cover"id="hpPhone"/>
          <div className="leftLoginBtn">
            <Login/>
          </div>
          <div className="centeredOnPhone">
            <div>
              <div className='dayTitle'>
                <img src="images/launchscreen_logo.png" alt="cover" style={{height: '120px'}}/>
              </div>
              <div className='phoneTitle'>Alege Cadoul</div>
              <div className='phoneSubTitle'>PERFECT</div>
              <br /><br /><br />
              <a href="https://play.google.com/store/apps/details?id=ro.bday.bday"><img src="images/google.png" alt="cover" style={{width: '30%'}}/></a>
              <div className='phoneTitle'>or</div>
              <a href="https://apps.apple.com/ro/app/bday-social-birthdays/id1397522004"><img src="images/appstore.png" alt="cover" style={{width: '30%'}}/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
