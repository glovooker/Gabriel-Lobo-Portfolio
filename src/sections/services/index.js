import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import BaffleText from 'components/baffle-text'
import AnimationContainer from 'components/animation-container'
import netIcon from '../../../content/images/icons/net.svg'
import cSharpIcon from '../../../content/images/icons/c#.svg'
import jestIcon from '../../../content/images/icons/jest.svg'
import scrumIcon from '../../../content/images/icons/scrum.svg'
import vsIcon from '../../../content/images/icons/vs.svg'
import vsCodeIcon from '../../../content/images/icons/vscode.svg'
import waterfallIcon from '../../../content/images/icons/waterfall.svg'
import sqlServerIcon from '../../../content/images/icons/sqlserver.svg'
import firebaseIcon from '../../../content/images/icons/firebase.svg'
import mongoDbIcon from '../../../content/images/icons/mongodb.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faNodeJs, faJsSquare, faFigma, faGitAlt, faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faPencilRuler,
  faServer,
  faRobot,
  faSmileBeam,
  faPizzaSlice,
  faQuoteRight,
  faCode,
} from '@fortawesome/free-solid-svg-icons'
import ThemeContext from '../../context'
import './styles.scss'

class Services extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
    }
    this.show = this.show.bind(this)
  }

  static contextType = ThemeContext

  show() {
    this.setState({ show: true })
  }

  render() {
    return (
      <section
        id={`${this.props.id}`}
        className="services"
        style={{ height: this.context.height }}
      >
        <Row
          className="top"
          style={{
            maxHeight:
              this.context.height !== 'auto'
                ? this.context.height * 0.8
                : 'inherit',
          }}
        >
          <div className="content">
            <Col md={12}>
              <div className="heading">
                <BaffleText
                  text="Some of My Knowledge"
                  revealDuration={500}
                  revealDelay={500}
                  parentMethod={this.show}
                  callMethodTime={1100}
                />
              </div>
              <div
                className="services_container"
                style={{
                  minHeight:
                    this.context.height !== 'auto'
                      ? this.context.height * 0.6
                      : 'inherit',
                }}
              >
                <Container>{this.services()}</Container>
              </div>
            </Col>
          </div>
        </Row>
      </section>
    )
  }

  services() {
    if (this.state.show || this.context.height === 'auto') {
      return (
        <>
        <Row>
          <div className="line-text">
                <h4>C O D I N G</h4>
              </div>
          <Col md={4} className="service">
            <AnimationContainer delay={200} animation="fadeInLeft fast">
              <div className="icon" id="icon-js">
                <FontAwesomeIcon icon={faJsSquare} />
              </div>
              <h4>JavaScript</h4>

            </AnimationContainer>
          </Col>
          <Col md={4} className="service border-side">
            <AnimationContainer delay={400} animation="fadeIn fast">
              <div className="icon" >
                <img src={netIcon} width="50px"/> 
              </div>
              <h4> ASP.NET Core</h4>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service">
            <AnimationContainer delay={600} animation="fadeInRight fast">
              <div className="icon">
                <FontAwesomeIcon icon={faNodeJs} />
              </div>
              <h4>Node.js</h4>
            </AnimationContainer>
          </Col>
          </Row>
          <Row>
          <Col md={4} className="service">
            <AnimationContainer delay={200} animation="fadeInLeft fast">
              <div className="icon">
                <FontAwesomeIcon icon={faReact} className="solid" />
              </div>
              <h4>React.js</h4>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service border-side">
            <AnimationContainer delay={400} animation="fadeIn fast">
              <div className="icon" >
                <img src={cSharpIcon} width="50px"/> 
              </div>
              <h4>C#</h4>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service">
            <AnimationContainer delay={600} animation="fadeInRight fast">
              <div className="icon" >
                <img src={jestIcon} width="50px"/> 
              </div>
              <h4>Jest</h4>
            </AnimationContainer>
          </Col>
          </Row>
          <Row>
            <div className="line-text">
                <h4>D A T A B A S E S</h4>
              </div>
          <Col md={4} className="service">
            <AnimationContainer delay={800} animation="fadeInLeft fast">
              <div className="icon" >
                <img src={sqlServerIcon} width="50px"/> 
              </div>
              <h4>Microsoft SQL Server </h4>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service border-side">
            <AnimationContainer delay={1000} animation="fadeIn fast">
              <div className="icon" >
                <img src={firebaseIcon} width="37px"/> 
              </div>
              <h4>Google Firebase</h4>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service">
            <AnimationContainer delay={1200} animation="fadeInRight fast">
              <div className="icon" >
                <img src={mongoDbIcon} width="50px"/> 
              </div>
              <h4>MongoDB</h4>
            </AnimationContainer>
          </Col>
        </Row>
          <Row>
            <div className="line-text">
                <h4>P R O J E C T &nbsp; M A N A G E M E N T &nbsp; A N D &nbsp; T O O L S</h4>
              </div>
          <Col md={4} className="service">
            <AnimationContainer delay={1400} animation="fadeInLeft fast">
              <div className="icon" >
                <img src={scrumIcon} width="50px"/> 
              </div>
              <h4>Scrum</h4>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service border-side">
            <AnimationContainer delay={1600} animation="fadeIn fast">
              <div className="icon" >
                <img src={vsCodeIcon} width="50px"/> 
              </div>
              <h4>Visual Studio Code</h4>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service">
            <AnimationContainer delay={1800} animation="fadeInRight fast">
              <div className="icon">
                <FontAwesomeIcon icon={faGitAlt} />
              </div>
              <h4>Git</h4>
            </AnimationContainer>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="service">
            <AnimationContainer delay={1400} animation="fadeInLeft fast">
              <div className="icon" >
                <img src={waterfallIcon} width="50px"/> 
              </div>
              <h4>Waterfall</h4>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service border-side">
            <AnimationContainer delay={1600} animation="fadeIn fast">
              <div className="icon" >
                <img src={vsIcon} width="50px"/> 
              </div>
              <h4>Visual Studio 2019</h4>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service">
            <AnimationContainer delay={1800} animation="fadeInRight fast">
              <div className="icon">
                <FontAwesomeIcon icon={faGithub} />
              </div>
              <h4>Github</h4>
            </AnimationContainer>
          </Col>
        </Row>
        </>
      )
    }
  }
}

export default Services
