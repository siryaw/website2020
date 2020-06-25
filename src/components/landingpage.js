import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className = "landing-grid">
                    <Cell col ={12}>
                        <img src="samuel1.png" className= "avatar-img" alt="avatar" />

                        <p className="pic-text">Samuel J. Appiahene</p>

                        <div className= "banner-text" >
                            <h1>Full Stack Web Developer</h1>

                        <hr />

                        <p> HTML 5 | CSS3 | Javascript (ES6) | jQuery | Bootstrap | React | Node & NPM Express | MySQL | MongoDB | Git | AWS | Cypress.io </p>

                        <hr />  

                        <div className="social-links">

                            {/*LinkedIn fontawesome link */}
                            <a href="www.google.com" rel="noopener oneferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>

                            {/*Github fontawesome link */}
                            <a href="www.github.com/siryaw" rel="noopener oneferrer" target="">
                                <i className="fa fa-github-square" aria-hidden="true" />
                            </a>

                            {/*Youtube fontawesome link */}
                            <a href="www.google.com" rel="noopener oneferrer" target="_blank">
                                <i className="fa fa-youtube-square" aria-hidden="true" />
                            </a>

                        </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;