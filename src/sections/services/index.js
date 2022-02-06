import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import BaffleText from 'components/baffle-text'
import AnimationContainer from 'components/animation-container'
import netIcon from '../../../content/images/icons/net.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faAngular, faNodeJs, faJsSquare } from '@fortawesome/free-brands-svg-icons'
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
              <div className="line-text">
                <h4>S K I L L S</h4>
              </div>
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
        <Row>
          <Col md={4} className="service">
            <AnimationContainer delay={200} animation="fadeInLeft fast">
              <div className="icon" id="icon-js">
                <FontAwesomeIcon icon={faJsSquare} />
              </div>
              <h4>JavaScript</h4>
              <p>
                I started studying JavaScript about five years ago, and since then 
                I've improved my knowledge to create landing pages, WebApps, authentication
                systems, and many more!
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service border-side">
            <AnimationContainer delay={400} animation="fadeInDown fast">
              <div className="icon" >
                <img src={netIcon} width="50px"/> 
              </div>
              <h4> Microsoft .NET Core</h4>
              <p>
                Having worked with ASP.NET Core to create a whole back-end environment
                using Razor and Entity Framework, this technology has helped me along my way
                to develop well-structured server-side projects.
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service">
            <AnimationContainer delay={600} animation="fadeInRight fast">
              <div className="icon">
                <FontAwesomeIcon icon={faNodeJs} />
              </div>
              <h4>Node.js</h4>
              <p>
                When I thought back-end couldn't get any exciter,
                I came across Google's great runtime environment, Node.js! 
                I could now use JavaScript outside a browser to build 
                server-side code right away.
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service">
            <AnimationContainer delay={800} animation="fadeInLeft fast">
              <div className="icon">
                <FontAwesomeIcon icon={faReact} className="solid" />
              </div>
              <h4>React.js</h4>
              <p>
                My favorite face of JavaScript, React.js is all about UI made simple 
                and great performace. After working with it in a professional environment,
                it was love at first sight. And, as you could guess, yes, this portfolio is
                also running on React. What a coincidence!
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service border-side">
            <AnimationContainer delay={1000} animation="fadeInUp fast">
              <div className="icon">
                <FontAwesomeIcon icon={faServer} className="solid" />
              </div>
              <h4>Linux Server Management</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                dui sem, vulputate vitae dolor sed, sollicitudin pharetra nisi.
                In et sem libero. Integer pretium, tellus eu pellentesque
                tristique, ex libero maximus elit, mollis tristique urna eros
                non tellus
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service">
            <AnimationContainer delay={1200} animation="fadeInRight fast">
              <div className="icon">
                <FontAwesomeIcon icon={faRobot} className="solid" />
              </div>
              <h4>Artifical Intelligence</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                dui sem, vulputate vitae dolor sed, sollicitudin pharetra nisi.
                In et sem libero. Integer pretium, tellus eu pellentesque
                tristique, ex libero maximus elit, mollis tristique urna eros
                non tellus
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service">
            <AnimationContainer delay={200} animation="fadeInLeft fast">
              <div className="icon" id="icon-js">
                <FontAwesomeIcon icon={faJsSquare} />
              </div>
              <h4>JavaScript</h4>
              <p>
                I started studying JavaScript about five years ago, and since then 
                I've improved my knowledge to create landing pages, WebApps, authentication
                systems, and many more!
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service border-side">
            <AnimationContainer delay={400} animation="fadeInDown fast">
              <div className="icon" >
                <img src={netIcon} width="50px"/> 
              </div>
              <h4> Microsoft .NET Core</h4>
              <p>
                Having worked with ASP.NET Core to create a whole back-end environment
                using Razor and Entity Framework, this technology has helped me along my way
                to develop well-structured server-side projects.
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service">
            <AnimationContainer delay={600} animation="fadeInRight fast">
              <div className="icon">
                <FontAwesomeIcon icon={faNodeJs} />
              </div>
              <h4>AWS Management</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                dui sem, vulputate vitae dolor sed, sollicitudin pharetra nisi.
                In et sem libero. Integer pretium, tellus eu pellentesque
                tristique, ex libero maximus elit, mollis tristique urna eros
                non tellus
              </p>
            </AnimationContainer>
          </Col>
        </Row>
      )
    }
  }
}

export default Services
