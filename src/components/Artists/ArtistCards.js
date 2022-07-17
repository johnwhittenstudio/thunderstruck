import ReactDOM from "react-dom";
import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import classes from './Artists.module.css'
import { FaInstagramSquare } from "react-icons/fa";

const handleURL = (url) => {
  return () => window.open(url, "_blank")
}

const ArtistCards = () => {
  const [isFlipped1, setIsFlipped1] = useState(false);

  const handleClick1 = () => {
    setIsFlipped1(!isFlipped1)
  }

  const [isFlipped2, setIsFlipped2] = useState(false);

  const handleClick2 = () => {
    setIsFlipped2(!isFlipped2)
  }

  return (
    <>
      <div className={classes.ArtistCards}>

        <div className={classes.Row}>

          <div className={classes.Column}>
            {/* <div className={classes.Row}> */}

      <ReactCardFlip isFlipped={isFlipped1} flipDirection="horizontal">
      {/* <div className={classes.Column}> */}
      <div className={classes.Row}>
              <div className={classes.Card} >
                <div className={classes.CardFront} onClick={handleClick1}>
                  <div className={classes.Text}>
                    <h1>Dr. Jessi DiTillio</h1>
                    <h3>Los Angeles, California</h3>
                    <h4><em>Co-founding Co-director</em></h4>

                  </div>
                {/* </div > */}
              {/* </div >*/}
            </div >
          </div > 
      
        </div >

        {/* <div className={classes.Container}>*/}
          {/* <div className={classes.Column}> */}
            <div className={classes.Row}> 
              <div className={classes.Card} >
                <div className={classes.CardBack} onClick={handleClick1} >
                  <div className={classes.Text}>
                    <h2>Dr. Jessi DiTillio is a curator, writer, and art historian. She earned her PhD in the Department of Art + Art History at the University of Texas at Austin. </h2>
                    <br/>
                    <a href={'https://www.jessiditillio.com/'}><h3>website</h3></a>
                    <FaInstagramSquare className={classes.Icon} color="#add8e6" size='40px' style={{padding: '1%', borderRadius: '15px', cursor: 'pointer'}}
                      onClick={handleURL('https://www.instagram.com/john.whitten/?hl=en')} />
                  </div>
                </div >
              {/* </div > */}
            {/* </div >*/}
          </div >
        </div > 
      
      </ReactCardFlip>


      <ReactCardFlip isFlipped={isFlipped2} flipDirection="horizontal">
      
        {/* <div className={classes.Container}>*/}

          {/* <div className={classes.Column}>  */}
            <div className={classes.Row}> 
              <div className={classes.Card} >
                <div className={classes.CardFront} onClick={handleClick2}>
                  <div className={classes.Text}>
                    <h1>Name</h1>
                    <h3>location</h3>
                    <h4><em>role</em></h4>
                  </div>
                {/* </div > */}
              {/* </div >
            </div >*/}
          </div > 
            </div >
        </div >
{/* 
        <div className={classes.Container}>*/}
        {/* <div className={classes.Column}>  */}
            <div className={classes.Row}> 
              <div className={classes.Card} >
                <div className={classes.CardBack} onClick={handleClick2} >
                  <div className={classes.Text}>
                    <h1>Bio</h1>
                    <h3>website</h3>
                    <h3>instagram</h3>
                  </div>
                </div >
              {/* </div > */}
            {/* </div >
          </div >*/}
        </div > 
      
      </div >
      </ReactCardFlip>
      </div >
          </div >
        </div >
    </>
  )
};

ReactDOM.render(<ArtistCards />, document.querySelector("#root"));

export default ArtistCards;