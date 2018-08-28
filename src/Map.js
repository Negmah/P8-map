import React, { Component } from 'react'


class Map extends Component {

    state = {};
    markers = [];

    // function to create the map once Google Maps script is loaded
    onScriptLoad = () => {

        //empty object to use on demand
        const current = {};
        this.current = current;
		
        // DESTRUCTURING
        let startingPoint = {
            lat: 38.7944722,
            lng: -9.4411398
        };

        //define default attributes and starting point for map
        this.map = new window.google.maps.Map (
            document.getElementById('map'), {
                center: startingPoint,
                zoom: 11
            }
        );
        
        const infowindow = new window.google.maps.InfoWindow({
            maxWidth: 300   //establish max-wdith for infowindows, to enhance UX
        });


        this.infowindow = infowindow;
        
        // close one infowindow when another one opens
        window.google.maps.event.addListener(infowindow, 'closeclick', function() {
                current.marker = false;
        });

        window.google.maps.event.addListener(this.map, 'click', function() {
            current.marker = false;
            infowindow.close();
		});
    }

    // markers method
    loadmarker = () => {
				const self = this;
                console.log('loadmarker');  //DEBUG
                
				while (this.markers.length) {
					  this.markers.pop().setMap(null);
				}
        console.log(this.props.showingLocations); //DEBUG

        //map over the showingLocations array
        //build a marker and push it into the markers array
        //when clicking said venue, open infowindow with setup information
        //else, close the infowindow
        this.props.showingLocations.map(configVenue => {

            //DESTRUCTURING
            const position = {
                lat: configVenue.venue.location.lat,
                lng: configVenue.venue.location.lng
            }
            
            //define marker
            const marker = new window.google.maps.Marker({
                position: position,
                map: this.map,
                animation: window.google.maps.Animation.DROP,
                title: configVenue.venue.name,
                address: configVenue.venue.location.address,
                id: configVenue.venue.id,
            });
            
            // push each new marker into the empty array of markers
            this.markers.push(marker);


            window.google.maps.event.addListener(marker, 'click', function() {
                if (self.current.marker === marker) {
                        self.current.marker = false;
                        self.infowindow.close();
                } else {
                        self.current.marker = marker;
                        self.infowindow.setContent(marker.title + ' ' + marker.address);
                        self.infowindow.open(self.map, marker);
                }
            });
						
			return true;
        
        });
    }

    //invoke markers method immediately after update occurs, to be able to display them
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
            <div style={{ width: '100%', height: 410 }} id='map' role='application'>
            </div>
        );
    }
}

export default Map;