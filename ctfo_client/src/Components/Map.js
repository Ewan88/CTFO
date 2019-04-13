import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {

  static defaultProps = {
      center: {
        lat: 55.86,
        lng: -4.25
      },
      zoom: 11
    };

    render() {
      return (
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
          hostname={"maps.googleapis.com"}
          pathname={"/maps/api/js"}
          query={{ key: 'YOUR_API_KEY', libraries: 'geometry,drawing,places' }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            yesIWantToUseGoogleMapApiInternals
          >
            <AnyReactComponent
              lat={55.865351}
              lng={-4.257576}
              text="ME"
            />
          </GoogleMapReact>
        </div>
      );
    }

}

export default Map;
