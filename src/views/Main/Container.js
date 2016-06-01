import React from 'react'
import Map, { GoogleApiWrapper } from 'google-maps-react'

export class Container extends React.Component {
  render () {
    return (
      <div> 
        <p>Hello from the container</p>
        <Map google={this.props.goggle} />
      </div>
    );
  }
};

export default GoogleApiWrapper({
  apiKey: __GAPI_KEY__
})(Container);
