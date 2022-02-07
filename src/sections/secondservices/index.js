import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import BaffleText from 'components/baffle-text'
import AnimationContainer from 'components/animation-container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SD from '../../../content/images/clients/client-1.png'
import GD from '../../../content/images/clients/client-2.png'
import CB from '../../../content/images/clients/client-3.png'
import WR from '../../../content/images/clients/client-4.png'
import UI from '../../../content/images/clients/client-5.png'
import AV from '../../../content/images/clients/client-6.png'
import materialUiIcon from '../../../content/images/icons/materialui.svg'
import solanaIcon from '../../../content/images/icons/solana.svg'
import illustratorIcon from '../../../content/images/icons/illustrator.svg'
import photoshopIcon from '../../../content/images/icons/photoshop.svg'
import aftereffectsIcon from '../../../content/images/icons/aftereffects.svg'
import premiereIcon from '../../../content/images/icons/premiere.svg'
import davinciIcon from '../../../content/images/icons/davinci.svg'
import blenderIcon from '../../../content/images/icons/blender.svg'

import { faReact, faNodeJs, faJsSquare, faFigma, faGitAlt, faGithub, faBootstrap, faBitcoin, faEthereum } from '@fortawesome/free-brands-svg-icons'
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
              <div className="heading">
                <BaffleText
                  text=""
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
        <Row className="bottom">{this.clients()}</Row>
      </section>
    )
  }

  services() {
    if (this.state.show || this.context.height === 'auto') {
      return (
        <>
        <Row>
          <div className="line-text">
            <h4>U I</h4>
          </div>
          <Col md={4} className="service">
            <AnimationContainer delay={200} animation="fadeInLeft fast">
              <div className="icon">
                <FontAwesomeIcon icon={faBootstrap} />
              </div>
              <h4>Bootstrap</h4>

            </AnimationContainer>
          </Col>
          <Col md={4} className="service border-side">
            <AnimationContainer delay={400} animation="fadeIn fast">
              <div className="icon">
                <FontAwesomeIcon icon={faFigma} />
              </div>
              <h4>Figma</h4>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service">
            <AnimationContainer delay={600} animation="fadeInRight fast">
              <div className="icon" >
                <img src={materialUiIcon} width="50px"/> 
              </div>
              <h4>Material UI</h4>
            </AnimationContainer>
          </Col>
          </Row>
          <Row>
          <div className="line-text">
            <h4>C R Y P T O &nbsp; & &nbsp; B L O C K C H A I N</h4>
          </div>
          <Col md={4} className="service">
            <AnimationContainer delay={800} animation="fadeInLeft fast">
              <div className="icon">
                <FontAwesomeIcon icon={faBitcoin} className="solid" />
              </div>
              <h4>Bitcoin</h4>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service border-side">
            <AnimationContainer delay={1000} animation="fadeIn fast">
              <div className="icon">
                <FontAwesomeIcon icon={faEthereum} className="solid" />
              </div>
              <h4>Ethereum</h4>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service">
            <AnimationContainer delay={1200} animation="fadeInRight fast">
              <div className="icon" >
                <img src={solanaIcon} width="50px"/> 
              </div>
              <h4>Solana</h4>
            </AnimationContainer>
          </Col>
          </Row>
        <Row>
          <div className="line-text">
                <h4>V I S U A L &nbsp; D E S I G N</h4>
              </div>
          <Col md={4} className="service">
            <AnimationContainer delay={200} animation="fadeInLeft fast">
              <div className="icon" >
                <img src={illustratorIcon} width="50px"/> 
              </div>
              <h4>Adobe Illustrator</h4>

            </AnimationContainer>
          </Col>
          <Col md={4} className="service border-side">
            <AnimationContainer delay={400} animation="fadeIn fast">
              <div className="icon" >
                <img src={photoshopIcon} width="50px"/> 
              </div>
              <h4>Adobe Photoshop</h4>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service">
            <AnimationContainer delay={600} animation="fadeInRight fast">
              <div className="icon" >
                <img src={aftereffectsIcon} width="50px"/> 
              </div>
              <h4>Adobe After Effects</h4>
            </AnimationContainer>
          </Col>
          </Row>
          <Row>
          <Col md={4} className="service">
            <AnimationContainer delay={800} animation="fadeInLeft fast">
              <div className="icon" >
                <img src={premiereIcon} width="50px"/> 
              </div>
              <h4>Adobe Premiere Pro</h4>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service border-side">
            <AnimationContainer delay={1000} animation="fadeIn fast">
              <div className="icon" >
                <img src={davinciIcon} width="50px"/> 
              </div>
              <h4>Davinci Resolve</h4>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service">
            <AnimationContainer delay={1200} animation="fadeInRight fast">
              <div className="icon" >
                <img src={blenderIcon} width="50px"/> 
              </div>
              <h4>Blender</h4>
            </AnimationContainer>
          </Col>
          </Row>
        </>
      )
    }
  }

  clients() {
    if (this.state.show || this.context.height === 'auto') {
      return (
        <>
          <Col md={2} className="client">
            <AnimationContainer delay={100} animation="fadeIn slower">
              <img src={ SD } alt="client" />
            </AnimationContainer>
          </Col>
          <Col md={2} className="client">
            <AnimationContainer delay={100} animation="fadeIn slower">
              <img src={ GD } alt="client" />
            </AnimationContainer>
          </Col>
          <Col md={2} className="client">
            <AnimationContainer delay={100} animation="fadeIn slower">
              <img src={ CB } alt="client" />
            </AnimationContainer>
          </Col>
          <Col md={2} className="client">
            <AnimationContainer delay={100} animation="fadeIn slower">
              <img src={ WR } alt="client" />
            </AnimationContainer>
          </Col>
          <Col md={2} className="client">
            <AnimationContainer delay={100} animation="fadeIn slower">
              <img src={ UI } alt="client" />
            </AnimationContainer>
          </Col>
          <Col md={2} className="client">
            <AnimationContainer delay={100} animation="fadeIn slower">
              <img src={ AV } alt="client" />
            </AnimationContainer>
          </Col>
        </>
      )
    }
  }
}


export default SecondServices
