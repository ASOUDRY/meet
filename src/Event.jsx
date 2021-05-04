import React from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export class Event extends React.Component {
  constructor(props) {
    super(props)
    this.state = { show: false };
  }
  
  open(e) {
   this.setState({show: true})
   console.log(this.state.show);
  }
  close(e) {
    this.setState({show: false});
  }
   render() {  
    return  (
      <div>
        <div className="event">
            <h3 className="summary">{this.props.event.summary}</h3>
            <h3 className="location">{this.props.event.location}</h3>
            <button type="button" className="button" onClick={() => this.open()}>Show Details</button>
            <Modal show={this.state.show} >
              <Modal.Header>
                <Modal.Title>{this.props.event.summary}</Modal.Title>
                <Button onClick={() => this.close()}>Close</Button>
              </Modal.Header>
              <Modal.Body>
              <h4 className="location hidden" >{this.props.event.location}</h4>
            <a className="link hidden" href={this.props.event.htmlLink}>Website</a>
            <h4 className="description hidden" >{this.props.event.description}</h4>
            <h4 className="email hidden" >{this.props.event.creator.email}</h4>
              </Modal.Body>
            </Modal>
          </div>
      </div>
    )
}}
export default Event;