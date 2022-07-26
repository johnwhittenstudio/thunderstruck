import ReactDOM from "react-dom";
import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import classes from './Artists.module.css'
import { FaInstagramSquare } from "react-icons/fa";
import { GiSpiderWeb } from "react-icons/gi";



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
          <h2 className={classes.Header}>meet the crüe</h2>
      <div className={classes.Container}>
{/* Jessi */}
            <ReactCardFlip isFlipped={isFlipped1} flipDirection="horizontal">
              <div className={classes.Row}>
                <div className={classes.Column}>
                  <div className={classes.CardFront} >
                    <div onClick={handleClick1} style={{cursor: 'pointer'}}>
                      <div className={classes.Text}>
                        <h1>Dr. Jessi DiTillio</h1>
                        <h4>Los Angeles, California</h4>
                        <h4><em>Co-director, Curator</em></h4>
                      </div>
                    </div >
                  </div >
                </div >
              </div > 
              <div className={classes.Row}>
                <div className={classes.Column}>
                  <div className={classes.CardBack} >
                    <div onClick={handleClick1} style={{cursor: 'pointer'}}>
                      <div className={classes.Text}>
                          <h3 >thunder empress</h3>
                          <h3 >celestial coreographer</h3>
                          <h3 >crafter of galaxies</h3>
                          <h3 >earth sculptress</h3>
                          <h3 >language enchanter</h3>
                          <h3 >adventure medium</h3>
                        <br/>
                        <FaInstagramSquare className={classes.Icon} color="#092765" size='40px' style={{paddingRight: '3%', borderRadius: '15px', cursor: 'pointer'}}
                          onClick={handleURL('https://www.instagram.com/john.whitten/?hl=en')} />
                        <GiSpiderWeb className={classes.Icon} color="#092765" size='40px' style={{paddingLeft: '3%', borderRadius: '15px', cursor: 'pointer'}}
                          onClick={handleURL('https://www.jessiditillio.com/')} />
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
                  <div  onClick={handleClick2} style={{cursor: 'pointer'}}>
                    <div className={classes.Text}>
                      <h1>Katherine Spinella</h1>
                      <h4>Portland, Oregon</h4>
                      <h4><em>Co-director</em></h4>
                    </div>
                  </div >
                </div >
              </div >
            </div >
            <div className={classes.Row}>
              <div className={classes.Column}>
                <div className={classes.CardBack} >
                  <div onClick={handleClick2} style={{cursor: 'pointer'}}>
                    <div className={classes.Text}>
                      <h3>priestess of pigeons</h3>
                      <h3>sorcerer of signs</h3>
                      <h3>lounge enticer</h3>
                      <h3>prophet of feasts</h3>
                      <h3>display cartographer</h3>
                      <h3>gatherer of instances</h3>
                      <br/>
                      <FaInstagramSquare className={classes.Icon} color="#092765" size='40px' style={{paddingTop: '3%', borderRadius: '15px', cursor: 'pointer'}}
                        onClick={handleURL('https://www.instagram.com/katherine.spinella/?hl=en')} />
                      <GiSpiderWeb className={classes.Icon} color="#092765" size='40px' style={{paddingLeft: '3%', borderRadius: '15px', cursor: 'pointer'}}
                        onClick={handleURL('https://www.katherinespinella.com/')} />                        
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
                  <div  onClick={handleClick3} style={{cursor: 'pointer'}}>
                    <div className={classes.Text}>
                      <h1>Michael E. Stephen</h1>
                      <h4>Los Angeles, California</h4>
                      <h4><em>Co-director</em></h4>
                    </div>
                  </div >
                </div >
              </div >
            </div >
            <div className={classes.Row}>
              <div className={classes.Column}>
                <div className={classes.CardBack} >
                  <div onClick={handleClick3} style={{cursor: 'pointer'}} >
                    <div className={classes.Text}>
                      <h3>snake tamer</h3>
                      <h3>molder of lightning</h3>
                      <h3>vortex architect</h3>
                      <h3>the Care Bear stare</h3>                      
                      <h3>transporter of monsters</h3>
                      <h3>vision distortionist</h3>
                      <br/>
                      <FaInstagramSquare className={classes.Icon} color="#092765" size='40px' style={{paddingTop: '3%', borderRadius: '15px', cursor: 'pointer'}}
                        onClick={handleURL('https://www.instagram.com/michaelestephen/')} />
                      <GiSpiderWeb className={classes.Icon} color="#092765" size='40px' style={{paddingLeft: '3%', borderRadius: '15px', cursor: 'pointer'}}
                        onClick={handleURL('https://www.michaelestephen.com/')} />
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
                  <div onClick={handleClick4} style={{cursor: 'pointer'}}>
                    <div className={classes.Text}>
                      <h1>John Whitten</h1>
                      <h4>Portland, Oregon</h4>
                      <h4><em>Co-director</em></h4>
                    </div>
                  </div >
                </div >
              </div >
            </div >
            <div className={classes.Row}>
              <div className={classes.Column}>
                <div className={classes.CardBack} >
                  <div onClick={handleClick4} style={{cursor: 'pointer'}}>
                    <div className={classes.Text}>
                      <h3>priest of pigeons</h3>
                      <h3>particle renderer</h3>
                      <h3>conjuror of reflections</h3>
                      <h3>IV</h3>
                      <h3>V</h3>
                      <h3>VI</h3>
                      <br/>
                      <FaInstagramSquare className={classes.Icon} color="#092765" size='40px' style={{paddingTop: '3%', borderRadius: '15px', cursor: 'pointer'}}
                        onClick={handleURL('https://www.instagram.com/john.whitten/?hl=en')} />
                      <GiSpiderWeb className={classes.Icon} color="#092765" size='40px' style={{paddingLeft: '3%', borderRadius: '15px', cursor: 'pointer'}}
                        onClick={handleURL('https://www.johnwhitten.com/')} />
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
                  <div  onClick={handleClick5} style={{cursor: 'pointer'}}>
                    <div className={classes.Text}>
                      <h1>Ashlin Aronin</h1>
                      <h4>Portland, Oregon</h4>
                      <h4><em>Member since 2020</em></h4>
                    </div>
                  </div >
                </div >
              </div >
            </div >
            <div className={classes.Row}>
              <div className={classes.Column}>
                <div className={classes.CardBack} >
                  <div  onClick={handleClick5} style={{cursor: 'pointer'}}>
                    <div className={classes.Text}>
                      <h3>transcriber of elements</h3>
                      <h3>sorcerer of sound</h3>
                      <h3>III</h3>
                      <h3>IV</h3>
                      <h3>V</h3>
                      <h3>VI</h3>
                      <br/>
                      <FaInstagramSquare className={classes.Icon} color="#092765" size='40px' style={{paddingTop: '3%', borderRadius: '15px', cursor: 'pointer'}}
                        onClick={handleURL('https://www.instagram.com/scenicbanker/?hl=en')} />
                      <GiSpiderWeb className={classes.Icon} color="#092765" size='40px' style={{paddingLeft: '3%', borderRadius: '15px', cursor: 'pointer'}}
                        onClick={handleURL('https://ashlin.me/')} />
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
                  <div  onClick={handleClick6} style={{cursor: 'pointer'}}>
                    <div className={classes.Text}>
                      <h1>Rosana Aviña-Beam</h1>
                      <h4>Dallas, Texas</h4>
                      <h4><em>Member since 2018</em></h4>
                    </div>
                  </div >
                </div >
              </div >
            </div >
            <div className={classes.Row}>
              <div className={classes.Column}>
                <div className={classes.CardBack} >
                  <div onClick={handleClick6} style={{cursor: 'pointer'}}>
                    <div className={classes.Text}>
                      <h3>cultivator of mercy</h3>
                      <h3>II</h3>
                      <h3>III</h3>
                      <h3>IV</h3>
                      <h3>V</h3>
                      <h3>VI</h3>
                      <br/>
                      <FaInstagramSquare className={classes.Icon} color="#092765" size='40px' style={{paddingTop: '3%', borderRadius: '15px', cursor: 'pointer'}}
                        onClick={handleURL('https://www.instagram.com/rosana_avina/')} />
                      <GiSpiderWeb className={classes.Icon} color="#092765" size='40px' style={{paddingLeft: '3%', borderRadius: '15px', cursor: 'pointer'}}
                        onClick={handleURL('https://www.etsy.com/ca/shop/RnRHandmadeStudio?ref=profile_header')} />
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
                  <div onClick={handleClick7} style={{cursor: 'pointer'}}>
                    <div className={classes.Text}>
                      <h1>Robert Collier Beam</h1>
                      <h4>Dallas, Texas</h4>
                      <h4><em>Member since 2018</em></h4>
                    </div>
                  </div >
                </div >
              </div >
            </div >
            <div className={classes.Row}>
              <div className={classes.Column}>
                <div className={classes.CardBack} >
                  <div  onClick={handleClick7} style={{cursor: 'pointer'}}>
                    <div className={classes.Text}>
                      <h3>I</h3>
                      <h3>aerial revisionist</h3>
                      <h3>the darkness wrangler</h3>
                      <h3>IV</h3>
                      <h3>V</h3>
                      <h3>VI</h3>
                      <br/>
                      <FaInstagramSquare className={classes.Icon} color="#092765" size='40px' style={{paddingTop: '3%', borderRadius: '15px', cursor: 'pointer'}}
                        onClick={handleURL('https://www.instagram.com/robertcbeam/')} />
                      <GiSpiderWeb className={classes.Icon} color="#092765" size='40px' style={{paddingLeft: '3%', borderRadius: '15px', cursor: 'pointer'}}
                        onClick={handleURL('https://www.robertcollierbeam.com/')} />
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
                  <div  onClick={handleClick8} style={{cursor: 'pointer'}}>
                    <div className={classes.Text}>
                      <h1>Kristin Hough</h1>
                      <h4>Reno, Nevada</h4>
                      <h4><em>Member since 2020</em></h4>
                    </div>
                  </div >
                </div >
              </div >
            </div >
            <div className={classes.Row}>
              <div className={classes.Column}>
                <div className={classes.CardBack}  >
                  <div onClick={handleClick8} style={{cursor: 'pointer'}}>
                    <div className={classes.Text}>
                      <h3>sunset paparazzi</h3>
                      <h3>tchotchke tycoon</h3>
                      <h3>III</h3>
                      <h3>IV</h3>
                      <h3>V</h3>
                      <h3>VI</h3>
                      <br/>
                      <FaInstagramSquare className={classes.Icon} color="#092765" size='40px' style={{paddingTop: '3%', borderRadius: '15px', cursor: 'pointer'}}
                        onClick={handleURL('https://www.instagram.com/keekshough/')} />
                      <GiSpiderWeb className={classes.Icon} color="#092765" size='40px' style={{paddingLeft: '3%', borderRadius: '15px', cursor: 'pointer'}}
                        onClick={handleURL('http://www.kristinhough.com/')} />
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
                  <div onClick={handleClick9} style={{cursor: 'pointer'}}>
                    <div className={classes.Text}>
                      <h1>Morgan Rosskopf</h1>
                      <h4>Portland, Oregon</h4>
                      <h4><em>Member since 2020</em></h4>
                    </div>
                  </div >
                </div >
              </div >
            </div >
            <div className={classes.Row}>
              <div className={classes.Column}>
                <div className={classes.CardBack} >
                  <div  onClick={handleClick9} style={{cursor: 'pointer'}}>
                    <div className={classes.Text}>
                      <h3>surface synthesizer</h3>
                      <h3>excavator of levels</h3>
                      <h3>artificial peach flavorer</h3>
                      <h3>IV</h3>
                      <h3>V</h3>
                      <h3>VI</h3>
                      <br/>
                      <FaInstagramSquare className={classes.Icon} color="#092765" size='40px' style={{paddingTop: '3%', borderRadius: '15px', cursor: 'pointer'}}
                        onClick={handleURL('https://www.instagram.com/morganrosskopf_studio/?hl=en')} />
                      <GiSpiderWeb className={classes.Icon} color="#092765" size='40px' style={{paddingLeft: '3%', borderRadius: '15px', cursor: 'pointer'}}
                        onClick={handleURL('http://morganrosskopf.com/')} />
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