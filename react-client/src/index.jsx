import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Jumbotron } from 'react-bootstrap';
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
    <div className="spacer">
      <Jumbotron className="background">
        <h1 className="center" style={{ fontFamily: 'Permanent Marker', fontSize: '8em', color: '#fff' }}>i believe them</h1>
        <h3 className="center" style={{ fontFamily: 'Lobster', fontSize: '3em' }}>
          Under Construction!
        </h3>
        <h3 className="center" style={{ fontFamily: 'Lobster', fontSize: '3em' }}>
          Full Site Coming Soon!
        </h3>
        <p>
          <Button style={{ margin: '10px' }} bsStyle="success" bsSize="large" ><a style={{ color: '#fff' }} href="http://secure.actblue.com/donate/ibelievethem" target="_blank" rel="noopener noreferrer">Donate</a></Button>
          <Button style={{ margin: '10px' }} bsStyle="info" bsSize="large" ><a style={{ color: '#fff' }} href="http://www.instagram.com/ibelievethem" target="_blank" rel="noopener noreferrer">Instagram</a></Button>
        </p>
      </Jumbotron>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));