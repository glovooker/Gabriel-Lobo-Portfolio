import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import BaffleText from 'components/baffle-text'
import AnimationContainer from 'components/animation-container'
import netIcon from '../../../content/images/icons/net.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faAngular, faAws, faJsSquare } from '@fortawesome/free-brands-svg-icons'
import {
  faPencilRuler,
  faServer,
  faRobot,
  faSmileBeam,
  faPizzaSlice,
  faQuoteRight,
  faCode,
} from '@fortawesome/free-solid-svg-icons'
import Counter from 'components/counter'
import ThemeContext from '../../context'
import './styles.scss'

class SecondServices extends React.Component {
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
        className="secondservices"
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
                <h4>DEV/DES</h4>
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
        <Row className="bottom">{this.counters()}</Row>
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
                <FontAwesomeIcon icon={faAws} />
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
          <Col md={4} className="service">
            <AnimationContainer delay={800} animation="fadeInLeft fast">
              <div className="icon">
                <FontAwesomeIcon icon={faPencilRuler} className="solid" />
              </div>
              <h4>UI/UX Design</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                dui sem, vulputate vitae dolor sed, sollicitudin pharetra nisi.
                In et sem libero. Integer pretium, tellus eu pellentesque
                tristique, ex libero maximus elit, mollis tristique urna eros
                non tellus
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
        </Row>
      )
    }
  }

  counters() {
    if (this.state.show || this.context.height === 'auto') {
      return (
        <Container>
          <Col md={3}>
            <AnimationContainer delay={100} animation="fadeIn fast">
              <Counter
                icon={faSmileBeam}
                value={100}
                text="Happy Clients"
                symbol="+"
                duration={3}
              />
            </AnimationContainer>
          </Col>
          <Col md={3}>
            <AnimationContainer delay={100} animation="fadeIn fast">
              <Counter
                icon={faPizzaSlice}
                value={1000}
                text="Pizzas Ordered"
                symbol="+"
                duration={3}
              />
            </AnimationContainer>
          </Col>
          <Col md={3}>
            <AnimationContainer delay={100} animation="fadeIn fast">
              <Counter
                icon={faQuoteRight}
                value={500}
                text="Reviews"
                symbol="+"
                duration={3}
              />
            </AnimationContainer>
          </Col>
          <Col md={3}>
            <AnimationContainer delay={100} animation="fadeIn fast">
              <Counter
                icon={faCode}
                value={50000}
                text="Lines of Code"
                symbol="+"
                duration={3}
              />
            </AnimationContainer>
          </Col>
        </Container>
      )
    }
  }
}

export default SecondServices
