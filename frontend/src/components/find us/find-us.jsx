import React from 'react';
import { Container } from 'react-bootstrap';
import GoogleMapReact from 'google-map-react';

function FindUs() {
    const defaultProps = {
        center: {
          lat: 37.7749,
          lng: -122.4194
        },
        zoom: 15
      };
    
      return (
        <Container className="mt-5" id='findus'>
          <div style={{ height: '400px', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: 'YOUR_API_KEY_HERE' }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <Marker
                lat={37.7749}
                lng={-122.4194}
                name="My Restaurant"
                color="blue"
              />
            </GoogleMapReact>
          </div>
        </Container>
      );
    };
    
    const Marker = (props) => {
      const { color, name } = props;
      return (
        <div style={{
          color: 'white',
          background: color,
          padding: '15px 10px',
          display: 'inline-flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '100%',
          transform: 'translate(-50%, -50%)'
        }}>
          {name}
        </div>
      );
    };

export default FindUs;
