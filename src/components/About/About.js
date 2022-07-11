import React from "react";
import classes from './About.module.css'
import logo01 from './../img/logos/01.png'
import logo02 from './../img/logos/02.png'
import logo03 from './../img/logos/03.png'
import logo04 from './../img/logos/04.png'
import logo05 from './../img/logos/05.png'
import logo06 from './../img/logos/06.png'
import logo07 from './../img/logos/07.png'
import logo08 from './../img/logos/08.png'
import logo09 from './../img/logos/09.png'

const About = () => {
  return (
    <div className={classes.About}>
      <div className={classes.Container}>
        <div className={classes.Logos}>
          <img className={classes.Logo01} src={logo01} alt="me"></img>
          <img className={classes.Logo02} src={logo02} alt="me"></img>
          <img className={classes.Logo03} src={logo03} alt="me"></img>
          <img className={classes.Logo08} src={logo08} alt="me"></img>
          <img className={classes.Logo05} src={logo05} alt="me"></img>
        </div>
        <div className={classes.Text}>
        <p><strong><em>Thunderstruck</em></strong> is a creative collective producing exhibitions and publications inspired by our trips to land art works and nearby non-art sites in the American West. We seek to rethink the Land Art movement in order to investigate the critical legacy or the 1970s for contemporary culture and environmental activism. As a group of multidisciplinary artists and writers, we explore how our experience of the sites is altered and enriched by experiencing them communally.</p>
        <p>Thunderstruck began in 2018 as a trip among friends, five artists and one curator, who traveled to New Mexico to see the Very Large Array and Walter De Maria’s 1977 work <em>The Lightning Field</em>. Our conversations about art, science, history, and culture on this journey evolved into a collective project and a cross-disciplinary model for responding to human intervention in the landscape.</p> 
        <p><em>Thunderstruck</em> continued in 2020/2021 with trips to a constellation of sites in Utah–Nancy Holt’s <em>Sun Tunnels</em> (1976), the Bonneville Salt Flats, the Salt Lake Temple, Robert Smithson’s <em>Spiral Jetty</em> (1970), and the Hovenweep National Monument. As one of the few well-known women artists making land art in the 1970s, Holt’s contributions hold special significance for our revisionary approach to the history of land art. We planned the trips to coincide with the solstices in order to experience the interaction between Holt’s work and celestial time as the artist intended. Pairing our trip to the <em>Sun Tunnels</em> with sites of ecological, spiritual, political, and economic resonance is intended to expand the dialogue about her work with unexpected, creative associations.</p>
        <p>Building on Holt’s ethos, we explore energies that are solar, cosmic, spiritual, social and political as a means of structuring our experience of the other sites we visit, asking questions such as: <em>how have humans (artists, Mormon travelers, Ancestral Puebloans) experienced and represented time as an effect of the interaction between earth and sky in a range of different ways?</em></p>
        <p>In <em>Thunderstruck</em>, we experiment with sunlight, dirt, touch, and memory as art materials by incorporating them into printmaking processes and sculptural transformations. Recently, we worked with salt as an element that is fundamental to the Utah landscape with a diverse array of spiritual, biological, and mythological associations.</p>
        </div>
        <div className={classes.Logos}>
          <img className={classes.Logo02} src={logo02} alt="me"></img>
          <img className={classes.Logo06} src={logo06} alt="me"></img>
          <img className={classes.Logo05} src={logo05} alt="me"></img>
          <img className={classes.Logo04} src={logo04} alt="me"></img>
          <img className={classes.Logo07} src={logo07} alt="me"></img>
        </div>
      </div>
    </div>
  );
};
  
export default About;