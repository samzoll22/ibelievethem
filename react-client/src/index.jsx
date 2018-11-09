import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Jumbotron, Grid, Row, Col } from 'react-bootstrap';
import InstagramEmbed from 'react-instagram-embed';
// import $ from 'jquery';
// import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }

  // componentDidMount() {
  //   $.ajax({
  //     url: '/items', 
  //     success: (data) => {
  //       this.setState({
  //         items: data
  //       })
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
  // }

  render () {
    return (
    <Grid>
      <Row>
        <div className="spacer">
          <Jumbotron className="background">
            <h1 className="center" style={{ fontFamily: 'Permanent Marker', fontSize: '8em', color: '#000' }}>i believe them</h1>
            <h3 className="center" style={{ fontFamily: 'Lobster', fontSize: '3em' }}>
              Under Construction!
            </h3>
            <h3 className="center" style={{ fontFamily: 'Lobster', fontSize: '3em' }}>
              Full Site Coming Soon!
            </h3>
            <p>
              <Button style={{ margin: '10px' }} bsStyle="success" bsSize="large" ><a style={{ color: '#000' }} href="http://secure.actblue.com/donate/ibelievethem" target="_blank" rel="noopener noreferrer">Donate</a></Button>
              <Button style={{ margin: '10px' }} bsStyle="info" bsSize="large" ><a style={{ color: '#000' }} href="http://www.instagram.com/ibelievethem" target="_blank" rel="noopener noreferrer">Instagram</a></Button>
            </p>
          </Jumbotron>
        </div>
      </Row>
      <Row>
        <Col xs={4}/>
        <Col xs={4} style={{textAlign: 'center'}}>
          <InstagramEmbed
            url='https://www.instagram.com/p/Bp0A5k2FyJR/'
            maxWidth={320}
            hideCaption={false}
            containerTagName='div'
            protocol=''
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
          />
        </Col>
        <Col xs={4}/>
      </Row>
    </Grid>  
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));