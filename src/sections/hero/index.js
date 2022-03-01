import React from 'react'
import './styles.scss'
import { StaticQuery, graphql } from 'gatsby'
import { Row, Col } from 'react-bootstrap'
import Glitch from 'components/glitch'
import Typewriter from 'typewriter-effect'
import ThemeContext from '../../context'
import { saveAs } from "file-saver"
import Resume from '../../../content/Resume.pdf'
class Hero extends React.Component {

  static contextType = ThemeContext

  render() {

    const saveFile = () => {
      saveAs(
        Resume,
        "Just My Resume.pdf"
      );
    };

    return (
      <section
        id={`${this.props.id}`}
        className="hero"
        style={{ height: this.context.height }}
      >
        <Row>
          <Col md={12} className="content">
            <div className="content-text">
              <div className="line-text">
                <h4>Hello World, I'm</h4>
              </div>
              <Glitch text="Gabriel Lobo" />
              <Typewriter
                options={{
                  strings: [
                    'Junior React Developer',
                    'UI/UX Designer',
                    'Web Dev Lover',
                    'Scrum Product Owner',
                    'UCenfotec Student',
                    'Anime Fanboy'
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
              <button className="hover-button" onClick={saveFile}>
                  <span>Download Resume</span>
              </button>
            </div>
          </Col>
          <Col md={12} className="img">
            <img
              src={this.props.mainImg.childImageSharp.fluid.src}
              alt="Gabriel Lobo' Logo"
            />
          </Col>
        </Row>
      </section>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        Img: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              src
            }
          }
        }
      }
    `}
    render={({ icons, Img }) => <Hero icons={icons} mainImg={Img} {...props} />}
  />
)
