import React from 'react'
import Particles from 'react-particles-js';
import { StaticQuery, graphql } from 'gatsby'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faFigma, faYoutube } from '@fortawesome/free-brands-svg-icons'
import ThemeContext from '../../context'
import './styles.scss'

class Hero extends React.Component {

    static contextType = ThemeContext

    render() {
        return (
            <section id={`${this.props.id}`} className="about" style={{height: this.context.height}}>
                {this.particles()}
                <Row>
                    <Col md={6} className="content">
                        <div className="content-text">
                            <div className="line-text">
                                <h4>About Me</h4>
                            </div>
                            <h3>I'm a React Developer with a Graphic Designer Complex</h3>
                            <div className="separator" />
                            <p>Just kidding! As a matter of fact, I love both logical and creative worlds that merge together through tech. 
                              Every good idea has a back-end and a front-end waiting to be developed, and both of them are as breathtaking as the other to me.
                            </p>
                            <p>Having worked as a Software Engineer Intern at 3Pillar Global using React, C#, ASP.NET MVC, with the help of Agile's Scrum Methodology on the way (yes, I'm also a certified Scrum Product Owner), 
                              I'm currently learning and building my knowledge alongside great people through the Software Engineering Bachelor's Degree at Cenfotec.
                            </p>
                            <p>As a fan of technology and knowledge, if you have an idea that could use my abilities to come to reality through any of the above-mentioned stuff, 
                              feel free to check out my CV or the projects I've left for you below, and reach out to me as soon as you feel like it!
                            </p>
                            <br/>
                            <div className="social social_icons">
                                <FontAwesomeIcon icon={faGithub} className="social_icon" onClick={() => window.open('https://www.github.com/kuronoknshi')}/>
                                <FontAwesomeIcon icon={faFigma} className="social_icon" onClick={() => window.open('https://www.figma.com/@blacksw0rdman')} />
                                <FontAwesomeIcon icon={faYoutube} className="social_icon" onClick={() => window.open('https://www.youtube.com')} />
                                <FontAwesomeIcon icon={faLinkedin} className="social_icon" onClick={() => window.open('https://www.linkedin.com/in/gabriel-alejandro-lobo-ulloa-4a63b4196/')} />
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className="img">
                        <img
                        src={this.props.mainImg.childImageSharp.fluid.src}
                        alt="Gabriel Lobo"
                        />
                    </Col>
                </Row>
            </section>
        )
    }

    particles() {
        return (
            <Particles
                className="particles"
                params={{
                    "particles": {
                        "number": {
                            "value": 50,
                            "density": {
                                "enable": false,
                                "value_area": 5000
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "opacity": 1
                        },
                        "size": {
                            "value": 3
                        },
                    },
                    "retina_detect": true
            }}/>
        )
    }

}

export default props => (
<StaticQuery
    query={graphql`
      query {
        icons: allFile(
          filter: {
            extension: { regex: "/(png)/" }
            relativeDirectory: { eq: "icons" }
          }
        ) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 100) {
                  src
                }
              }
            }
          }
        }
        Img: file(relativePath: { eq: "person2.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 961) {
              src
            }
          }
        }
      }
    `}
    render={({ icons, Img }) => <Hero icons={icons} mainImg={Img} {...props} />}
  />
)