import React, { Component } from 'react'




class Map extends Component {


    state = {

        venues: [],

        markers: []

    };



    // function to create the map once Google Maps script is loaded


    onScriptLoad = () => {
	console.log('onScriptLoad');


	const current = {};

	this.current = current;


	// DESTRUCTURING

        let startingPoint = {

            lat: 38.7944722,

            lng: -9.4411398

        };



        this.map = new window.google.maps.Map (document.getElementById('map'), {

                center: startingPoint,

                zoom: 11

        });


				
	const infowindow = new window.google.maps.InfoWindow();
	this.infowindow = infowindow;

	window.google.maps.event.addListener(infowindow, 'closeclick', function() {

	current.marker = false;
	});
	window.google.maps.event.addListener(this.map, 'click', function() {
	current.marker = false;
	infowindow.close();
	});

	//this.setState({

	//    venues: this.props.venues,
	//		markers: []
        
	//});
	

    };

    loadmarker = () => {

			const self = this;
			console.log('loadmarker');
			this.props.venues.map(configVenue => {


		        const position = {
	
                lat: configVenue.venue.location.lat,

	                lng: configVenue.venue.location.lng
		        };

           
		//what is the idea behing this address encapsulation?
			//const address = {
			//    placeAddress: configVenue.venue.location.address
			//};

			const marker = new window.google.maps.Marker({
	
                position: position,
	
                map: this.map,

	                animation: window.google.maps.Animation.DROP,
	
                title: configVenue.venue.name,

	                address: configVenue.venue.location.address,
		        //address: address,
			id: configVenue.venue.id,

		        });

						//!!! this is not allowed - state should be treated as immutable!!!
						
			//I am leaving this as is to limit number of changes
						
			//however you are not using markers from state, so you should simply remove those two lines
		            this.state.markers.push(marker);
		
            console.log('state markers ', this.state.markers);



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


			return true; //map should return some value

		        });
			
    };
			

    componentDidUpdate(){

				console.log('componentDidUpdate');

			        this.loadmarker();

			    };

			
    //When DOM loads, initialize Google Map

			    componentDidMount() {

				console.log('componentDidMount');

			        if (!window.google) {
				console.log('insert script tag');
			
            const s = document.createElement('script');

			            s.type = 'text/javascript';

			            //s.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDzarJ6aPe4n19_qJK-aobJpOXqAeJtlwI&v=3`;

	  			    s.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAVFdY_1S25lRmPEaC6zCVcOqHo6T3H-i0&v=3';

			            const x = document.getElementsByTagName('script')[0];

			            x.parentNode.insertBefore(s, x);

			            // Below is important.
			
            //We cannot access google.maps until it's finished loading

			            s.addEventListener('load', e => {
			
                this.onScriptLoad();

			            })
				
        } else {

	    				console.log('google namespace already exists');
			
            this.onScriptLoad();

				        }
				
    };

			
    render() {

				console.log('render');
	
				//if (document.getElementById('map')) return null;
			
        return (

			            <div style={{ width: '100%', height: 415 }} id='map'>

			            </div>

			        );

			    };
			
};
			

export default Map;