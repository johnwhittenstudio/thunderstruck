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

  const [isFlipped3, setIsFlipped3] = useState(false);
  const handleClick3 = () => {
    setIsFlipped3(!isFlipped3)
  }

  const [isFlipped4, setIsFlipped4] = useState(false);
  const handleClick4 = () => {
    setIsFlipped4(!isFlipped4)
  }

  const [isFlipped5, setIsFlipped5] = useState(false);
  const handleClick5 = () => {
    setIsFlipped5(!isFlipped5)
  }

  const [isFlipped6, setIsFlipped6] = useState(false);
  const handleClick6 = () => {
    setIsFlipped6(!isFlipped6)
  }

  const [isFlipped7, setIsFlipped7] = useState(false);
  const handleClick7 = () => {
    setIsFlipped7(!isFlipped7)
  }

  const [isFlipped8, setIsFlipped8] = useState(false);
  const handleClick8 = () => {
    setIsFlipped8(!isFlipped8)
  }

  const [isFlipped9, setIsFlipped9] = useState(false);
  const handleClick9 = () => {
    setIsFlipped9(!isFlipped9)
  }

  return (
    <>
      <div className={classes.Artist}>
      <div className={classes.Container}>
{/* Jessi */}
            <ReactCardFlip isFlipped={isFlipped1} flipDirection="horizontal">
              <div className={classes.Row}>
                <div className={classes.Column}>
                  <div className={classes.CardFront} >
                    <div onClick={handleClick1}>
                      <div className={classes.Text}>
                        <h1>Dr. Jessi DiTillio</h1>
                        <h3>Los Angeles, California</h3>
                        <h4><em>Co-director</em></h4>
                      </div>
                    </div >
                  </div >
                </div >
              </div > 
              <div className={classes.Row}>
                <div className={classes.Column}>
                  <div className={classes.CardBack} >
                    <div onClick={handleClick1} >
                      <div className={classes.Text}>
                        <h2>Dr. Jessi DiTillio is a curator, writer, and art historian. She earned her PhD in the Department of Art + Art History at the University of Texas at Austin. </h2>
                        <br/>
                        <a href={'https://www.jessiditillio.com/'}><h3>website</h3></a>
                        <FaInstagramSquare className={classes.Icon} color="#add8e6" size='40px' style={{padding: '1%', borderRadius: '15px', cursor: 'pointer'}}
                          onClick={handleURL('https://www.instagram.com/john.whitten/?hl=en')} />
                      </div>
                    </div >
                  </div > 
                </div >
              </div > 
            </ReactCardFlip>
{/* Katherine */}
            <ReactCardFlip isFlipped={isFlipped2} flipDirection="horizontal">
            <div className={classes.Row}>
              <div className={classes.Column}>
                <div className={classes.CardFront} >
                  <div  onClick={handleClick2}>
                    <div className={classes.Text}>
                      <h1>Katherine Spinella</h1>
                      <h3>Portland, Oregon</h3>
                      <h4><em>Co-founding Co-director</em></h4>
                    </div>
                  </div >
                </div >
              </div >
            </div >
            <div className={classes.Row}>
              <div className={classes.Column}>
                <div className={classes.CardBack} >
                  <div onClick={handleClick2} >
                    <div className={classes.Text}>
                      <h2>Dr. Jessi DiTillio is a curator, writer, and art historian. She earned her PhD in the Department of Art + Art History at the University of Texas at Austin. </h2>
                      <br/>
                      <a href={'https://www.jessiditillio.com/'}><h3>website</h3></a>
                      <FaInstagramSquare className={classes.Icon} color="#add8e6" size='40px' style={{padding: '1%', borderRadius: '15px', cursor: 'pointer'}}
                        onClick={handleURL('https://www.instagram.com/john.whitten/?hl=en')} />
                    </div>
                  </div >
                </div > 
              </div >
            </div >
            </ReactCardFlip>
{/* Mike */}
            <ReactCardFlip isFlipped={isFlipped3} flipDirection="horizontal">
            <div className={classes.Row}>
              <div className={classes.Column}>
                <div className={classes.CardFront} >
                  <div  onClick={handleClick3}>
                    <div className={classes.Text}>
                      <h1>Michael E. Stephen</h1>
                      <h3>Los Angeles, California</h3>
                      <h4><em>Co-founding Co-director</em></h4>
                    </div>
                  </div >
                </div >
              </div >
            </div >
            <div className={classes.Row}>
              <div className={classes.Column}>
                <div className={classes.CardBack} >
                  <div onClick={handleClick3} >
                    <div className={classes.Text}>
                      <h2>Dr. Jessi DiTillio is a curator, writer, and art historian. She earned her PhD in the Department of Art + Art History at the University of Texas at Austin. </h2>
                      <br/>
                      <a href={'https://www.jessiditillio.com/'}><h3>website</h3></a>
                      <FaInstagramSquare className={classes.Icon} color="#add8e6" size='40px' style={{padding: '1%', borderRadius: '15px', cursor: 'pointer'}}
                        onClick={handleURL('https://www.instagram.com/john.whitten/?hl=en')} />
                    </div>
                  </div >
                </div > 
              </div >
            </div >
            </ReactCardFlip>
{/* John */}
            <ReactCardFlip isFlipped={isFlipped4} flipDirection="horizontal">
            <div className={classes.Row}>
              <div className={classes.Column}>
                <div className={classes.CardFront}  >
                  <div onClick={handleClick4}>
                    <div className={classes.Text}>
                      <h1>John Whitten</h1>
                      <h3>Portland, Oregon</h3>
                      <h4><em>Co-founding Co-director</em></h4>
                    </div>
                  </div >
                </div >
              </div >
            </div >
            <div className={classes.Row}>
              <div className={classes.Column}>
                <div className={classes.CardBack} >
                  <div  onClick={handleClick4} >
                    <div className={classes.Text}>
                      <h2>Dr. Jessi DiTillio is a curator, writer, and art historian. She earned her PhD in the Department of Art + Art History at the University of Texas at Austin. </h2>
                      <br/>
                      <a href={'https://www.jessiditillio.com/'}><h3>website</h3></a>
                      <FaInstagramSquare className={classes.Icon} color="#add8e6" size='40px' style={{padding: '1%', borderRadius: '15px', cursor: 'pointer'}}
                        onClick={handleURL('https://www.instagram.com/john.whitten/?hl=en')} />
                    </div>
                  </div >
                </div > 
              </div >
            </div >
            </ReactCardFlip>
{/* Ashlin */}
            <ReactCardFlip isFlipped={isFlipped5} flipDirection="horizontal">
            <div className={classes.Row}>
              <div className={classes.Column}>
                <div className={classes.CardFront} >
                  <div  onClick={handleClick5}>
                    <div className={classes.Text}>
                      <h1>Ashlin Aronin</h1>
                      <h3>Portland, Oregon</h3>
                      <h4><em>Member since 2020</em></h4>
                    </div>
                  </div >
                </div >
              </div >
            </div >
            <div className={classes.Row}>
              <div className={classes.Column}>
                <div className={classes.CardBack} >
                  <div  onClick={handleClick5} >
                    <div className={classes.Text}>
                      <h2>Dr. Jessi DiTillio is a curator, writer, and art historian. She earned her PhD in the Department of Art + Art History at the University of Texas at Austin. </h2>
                      <br/>
                      <a href={'https://www.jessiditillio.com/'}><h3>website</h3></a>
                      <FaInstagramSquare className={classes.Icon} color="#add8e6" size='40px' style={{padding: '1%', borderRadius: '15px', cursor: 'pointer'}}
                        onClick={handleURL('https://www.instagram.com/john.whitten/?hl=en')} />
                    </div>
                  </div >
                </div > 
              </div >
            </div >
            </ReactCardFlip>
{/* Rosana */}
            <ReactCardFlip isFlipped={isFlipped6} flipDirection="horizontal">
            <div className={classes.Row}>
              <div className={classes.Column}>
                <div className={classes.CardFront} >
                  <div  onClick={handleClick6}>
                    <div className={classes.Text}>
                      <h1>Rosana Aviña-Beam</h1>
                      <h3>Dallas, Texas</h3>
                      <h4><em>Member since 2018</em></h4>
                    </div>
                  </div >
                </div >
              </div >
            </div >
            <div className={classes.Row}>
              <div className={classes.Column}>
                <div className={classes.CardBack} >
                  <div  onClick={handleClick6} >
                    <div className={classes.Text}>
                      <h2>Dr. Jessi DiTillio is a curator, writer, and art historian. She earned her PhD in the Department of Art + Art History at the University of Texas at Austin. </h2>
                      <br/>
                      <a href={'https://www.jessiditillio.com/'}><h3>website</h3></a>
                      <FaInstagramSquare className={classes.Icon} color="#add8e6" size='40px' style={{padding: '1%', borderRadius: '15px', cursor: 'pointer'}}
                        onClick={handleURL('https://www.instagram.com/john.whitten/?hl=en')} />
                    </div>
                  </div >
                </div > 
              </div >
            </div >
            </ReactCardFlip>
{/* Rob */}
            <ReactCardFlip isFlipped={isFlipped7} flipDirection="horizontal">
            <div className={classes.Row}>
              <div className={classes.Column}>
                <div className={classes.CardFront}  >
                  <div onClick={handleClick7}>
                    <div className={classes.Text}>
                      <h1>Robert Collier Beam</h1>
                      <h3>Dallas, Texas</h3>
                      <h4><em>Member since 2018</em></h4>
                    </div>
                  </div >
                </div >
              </div >
            </div >
            <div className={classes.Row}>
              <div className={classes.Column}>
                <div className={classes.CardBack} >
                  <div  onClick={handleClick7} >
                    <div className={classes.Text}>
                      <h2>Dr. Jessi DiTillio is a curator, writer, and art historian. She earned her PhD in the Department of Art + Art History at the University of Texas at Austin. </h2>
                      <br/>
                      <a href={'https://www.jessiditillio.com/'}><h3>website</h3></a>
                      <FaInstagramSquare className={classes.Icon} color="#add8e6" size='40px' style={{padding: '1%', borderRadius: '15px', cursor: 'pointer'}}
                        onClick={handleURL('https://www.instagram.com/john.whitten/?hl=en')} />
                    </div>
                  </div >
                </div > 
              </div >
            </div >
            </ReactCardFlip>
{/* Kristin */}
            <ReactCardFlip isFlipped={isFlipped8} flipDirection="horizontal">
            <div className={classes.Row}>
              <div className={classes.Column}>
                <div className={classes.CardFront} >
                  <div  onClick={handleClick8}>
                    <div className={classes.Text}>
                      <h1>Kristin Hough</h1>
                      <h3>Reno, Nevada</h3>
                      <h4><em>Member since 2020</em></h4>
                    </div>
                  </div >
                </div >
              </div >
            </div >
            <div className={classes.Row}>
              <div className={classes.Column}>
                <div className={classes.CardBack}  >
                  <div onClick={handleClick8} >
                    <div className={classes.Text}>
                      <h2>Dr. Jessi DiTillio is a curator, writer, and art historian. She earned her PhD in the Department of Art + Art History at the University of Texas at Austin. </h2>
                      <br/>
                      <a href={'https://www.jessiditillio.com/'}><h3>website</h3></a>
                      <FaInstagramSquare className={classes.Icon} color="#add8e6" size='40px' style={{padding: '1%', borderRadius: '15px', cursor: 'pointer'}}
                        onClick={handleURL('https://www.instagram.com/john.whitten/?hl=en')} />
                    </div>
                  </div >
                </div > 
              </div >
            </div >
            </ReactCardFlip>
{/* Morgan */}
            <ReactCardFlip isFlipped={isFlipped9} flipDirection="horizontal">
            <div className={classes.Row}>
              <div className={classes.Column}>
                <div className={classes.CardFront}  >
                  <div onClick={handleClick9}>
                    <div className={classes.Text}>
                      <h1>Morgan Rosskopf</h1>
                      <h3>Portland, Oregon</h3>
                      <h4><em>Member since 2020</em></h4>
                    </div>
                  </div >
                </div >
              </div >
            </div >
            <div className={classes.Row}>
              <div className={classes.Column}>
                <div className={classes.CardBack} >
                  <div  onClick={handleClick9} >
                    <div className={classes.Text}>
                      <h2>Dr. Jessi DiTillio is a curator, writer, and art historian. She earned her PhD in the Department of Art + Art History at the University of Texas at Austin. </h2>
                      <br/>
                      <a href={'https://www.jessiditillio.com/'}><h3>website</h3></a>
                      <FaInstagramSquare className={classes.Icon} color="#add8e6" size='40px' style={{padding: '1%', borderRadius: '15px', cursor: 'pointer'}}
                        onClick={handleURL('https://www.instagram.com/john.whitten/?hl=en')} />
                    </div>
                  </div >
                </div > 
              </div >
            </div >
            </ReactCardFlip>

        </div >
      </div >
    </>
  )
};

ReactDOM.render(<ArtistCards />, document.querySelector("#root"));

export default ArtistCards;