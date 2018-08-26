import React, { Component } from 'react'


class Map extends Component {

    state = {
        map: {},
        venues: [],
        markers: [],
    }

    // function to create the map once Google Maps script is loaded
    onScriptLoad = () => {

        // DESTRUCTURING
        let startingPoint = {
            lat: 38.7944722,
            lng: -9.4411398
        };

        const map = new window.google.maps.Map (
            document.getElementById('map'), {
                center: startingPoint,
                zoom: 11
            }
        );

        this.setState({
            map: map,
            venues: this.props.venues
        })
    }

    loadmarker = () => {
        this.props.venues.map(configVenue => {
            
            const position = {
                lat: configVenue.venue.location.lat,
                lng: configVenue.venue.location.lng
            }
            
            const marker = new window.google.maps.Marker({
                position: position,
                map: this.state.map,
                animation: window.google.maps.Animation.DROP,
                title: configVenue.venue.name,
                id: configVenue.venue.id
            });
            
            this.state.markers.push(marker);
            
            console.log('state markers ', this.state.markers)
            
            const largeInfoWindow = new window.google.maps.InfoWindow();
            
            marker.addListener('click', () => {
                populateInfoWindow(this, largeInfoWindow);
            });
            
            /*This function populates the infoWindow when the marker is clicked.
            We'll only allow one infoWindow which will open on the marker that is clicked
            and populate based on that marker's position*/
            const populateInfoWindow = (marker, infowindow) => {
                //Check to make sure infowindow is not already opened on the marker
                if (infowindow.marker !== marker) {
                    infowindow.marker = marker;   
                    infowindow.setContent('<div>' + marker.title + '</div>');
                    infowindow.open(this.state.map, marker);
                    //Make sure the property is cleared if the infowindow is closed
                    infowindow.addListener('closeclick', () => {
                        infowindow.setMarker(null);
                    });
                }
            }
        });
    }


    componentDidUpdate(){
        this.loadmarker();
    }

    //When DOM loads, initialize Google Map
    componentDidMount() {
        if (!window.google) {
            const s = document.createElement('script');
            s.type = 'text/javascript';
            s.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDzarJ6aPe4n19_qJK-aobJpOXqAeJtlwI&v=3`;
            const x = document.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s, x);
            // Below is important. 
            //We cannot access google.maps until it's finished loading
            s.addEventListener('load', e => {
                this.onScriptLoad();                
            })
        } else {
            this.onScriptLoad();
        }
    }

    render() {
        return (
            <div style={{ width: '100%', height: 415 }} id='map'>
            </div>
        );
    }
}

export default Map;