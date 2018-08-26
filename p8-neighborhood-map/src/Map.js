import React, { Component } from 'react'


class Map extends Component {

    state = {
        map: {},
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

        this.setState({
            map: map,

        })
    }

    loadmarker = () => {
        let infowindow = 0;
        const self = this;
        while (this.state.markers.length) {
            this.state.markers.pop().setMap(null);
        }
        console.log(this.props.showingLocations)
        this.props.showingLocations.map(configVenue => {

            const position = {
                lat: configVenue.venue.location.lat,
                lng: configVenue.venue.location.lng
            }
            
            const address = {
                placeAddress: configVenue.venue.location.address
            }

            const marker = new window.google.maps.Marker({
                position: position,
                map: this.state.map,
                animation: window.google.maps.Animation.DROP,
                title: configVenue.venue.name,
                address: address,
                id: configVenue.venue.id,
            });
            
            
            //console.log('state markers ', this.state.markers)

            window.google.maps.event.addListener(marker, 'click', function() {
                if (infowindow) {
                    infowindow.close();
                }
                infowindow = new window.google.maps.InfoWindow();
                infowindow.setContent(marker.title + ' ' + marker.address);
                    console.log(infowindow);
                if(!marker.open){
                    infowindow.close();
                    infowindow.open(this.map, marker);
                    marker.open = true;
                }
            });
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