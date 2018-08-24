import React, { Component } from 'react';


class Map extends Component {

    // function to create the map once Google Maps script is loaded
    onScriptLoad = () => {
        
        // DESTRUCTURING
        let startingPoint = {
            lat: 38.785496,
            lng: -9.474103
        };

        const map = new window.google.maps.Map (
            document.getElementById('map'), {
                center: startingPoint,
                zoom: 11
            }
        );
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