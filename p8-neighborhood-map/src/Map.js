import React, { Component } from 'react'
import axios from 'axios'


class Map extends Component {

    state = {
        venues: [],
        /*locations : [
            {
                name : "Pena Palace",
                position :{ lat: 38.7875893 ,lng: -9.3927976 },
                address: "test"                   
            },
            {
                name : "Estoril Motorsport Racing Circuit",
                position :{ lat: 38.7505728, lng: -9.3963843 },
                address: "test"},
            {
                name : "Cruz Alta Monument",
                position :{ lat: 38.7846668, lng: -9.3967369 },
                address: "test"},
            {
                name : "Countess of Edla Chalet and Garden",
                position :{ lat: 38.7846374, lng: -9.3984987 },
                address: "test"
            },
            {
                name : "Moorish Castle",
                position :{ lat: 38.7944802, lng: -9.3963529 },
                address: "test"
            },
            {
                name : "Quinta da Regaleira palace and gardens",
                position :{ lat: 38.7956757, lng: -9.3974044 },
                address: "test"
            }
        ],*/
        markers: []
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

        for (let i = 0; i < this.state.venues.length; i++) {
            //DESTRUCTURING
            let position = this.state.venues[i].position;
            let title = this.state.venues[i].name;
            //Create a marker per location and place into markers array
            const marker = new window.google.maps.Marker({
                map: map,
                position: position,
                title: title,
                animation: window.google.maps.Animation.DROP,
                id: i
            });
            //Push the newly created marker into our array of markers
            this.state.markers.push(marker);        
        }

        /*const largeInfoWindow = new window.google.maps.InfoWindow();

        marker.addListener('click', function() {
            populateInfoWindow(this, largeInfoWindow);
        });

        /*This function populates the infoWindow when the marker is clicked. We'll only allow one infoWindow which will open on the marker that is clicked
        and populate based on that marker's position*/
        /*populateInfoWindow = (marker, infowindow) => {
            //Check to make sure infowindow is not already opened on the marker
            if (infowindow.marker != marker) {
                infowindow.marker = marker;   
                infowindow.setContent('<div>' + marker.title + '</div>');
                infowindow.open(map, marker);
                //Make sur ethe property is cleared if the infowindow is closed
                infowindow.addListener('closeclick', function() {
                    infowindow.setMarker(null);
                });
            }
        }*/
    }

    getVenues = () => {
        const endPoint = 'https://api.foursquare.com/v2/venues/explore?'
        const parameters = {
            client_id: 'GY21CT1VXNSUBLIHUETJXMKOZSVQOEGL3X32O5AHAZGABGV1',
            client_secret: 'LOTRCNP3MSSKHDCUCFKRNRHMFMATXUQ5BTZV2XA4TH4OKMDE',
            near: 'Sintra',
            section: 'topPicks',
            v: '20182507'
        }

        axios.get(endPoint + new URLSearchParams(parameters))
        .then(response => {
            this.setState({
                venues: response.data.response.groups[0].items
            })
        })
        .catch(error => {
            console.log('ERROR!! ' + error)
        })
    }

    //When DOM loads, initialize Google Map
    componentDidMount() {
        this.getVenues()
        if (!window.google) {
            const s = document.createElement('script');
            s.type = 'text/javascript';
            s.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDzarJ6aPe4n19_qJK-aobJpOXqAeJtlwI&v=3`;
            const x = document.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s, x);
            // Below is important. 
            //We cannot access google.maps until it's finished loading
            s.addEventListener('load', e => {
                this.onScriptLoad()
            })
        } else {
            this.onScriptLoad()
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