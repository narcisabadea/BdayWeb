import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Login from './Login.js'

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    button: {
      margin: theme.spacing(1),
    },
  }));

export default function Home() {
  const classes = useStyles();

  return (
    <div>
        <div>
            <img src="images/copil.jpg" alt="cover" id="hpCover"/>
            <div className="phoneContainer">
                <img src="images/s10.png" alt="cover"id="hpPhone"/>
                <div className="leftLoginBtn">
                    <div>
                    <Button style={{maxWidth: '250px', maxHeight: '60px', minWidth: '250px', minHeight: '60px'}} variant="contained" color="secondary" className={classes.button}>
                      <Login/>
                    </Button>
                    </div>
                </div>
                <div className="centeredOnPhone">
                    <div>
                      <div className='dayTitle'>
                        <img src="images/ic_launcher-web.png" alt="cover" style={{height: '100px'}}/>
                          day
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
