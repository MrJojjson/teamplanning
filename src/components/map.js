import React from 'react'
import {View,Text, Image, TouchableOpacity, StyleSheet} from 'react-native'
import { connect } from 'react-redux';
import MapView from 'react-native-maps';
import { onChangeGeoLocationPos, onChangeGeoLocationMarker } from '../actions';

class MapComp extends React.Component{
    
    constructor(){
        super();
        this.state = {
            lng: 0,
            lat: 0
        }
    }

    onLongPressMap = (event, inArray, inObject) => {
        console.log('event.nativeEvent.coordinate', event.nativeEvent.coordinate);
        
        const geoCordinates = event.nativeEvent.coordinate;
        var geoLoc = {
            latitude: event.nativeEvent.coordinate.latitude,
            longitude: event.nativeEvent.coordinate.longitude,
        }
        this.props.dispatch(onChangeGeoLocationMarker(geoLoc, inArray, inObject))
        
    }

    render(){
        let { inArray, inObject } = this.props;
        let lng = 0;
        let lat = 0;
        let coordinates = { latitude: 0, longitude: 0}

        if(this.props[inArray][inObject]){
            lng = this.props[inArray][inObject].longitude;
            lat = this.props[inArray][inObject].latitude;            
        }
        
        var marker = inObject += 'Marker';
        
        if(this.props[inArray][marker]){
            coordinates.latitude = this.props[inArray][marker].latitude;
            coordinates.longitude = this.props[inArray][marker].longitude;
        }

        return(
                <MapView
                    style={styles.mapView}
                    region={{
                    latitude: lat,
                    longitude: lng,
                    latitudeDelta: 0.0090,
                    longitudeDelta: 0.0090,
                    }}
                    onLongPress={(event) => this.onLongPressMap(event, inArray, inObject)}
                >
                <MapView.Circle center={coordinates} radius={125} strokeColor='rgba(200, 200, 200, 0.85)' fillColor='rgba(200, 200, 200, 0.5)'/>
                <MapView.Marker draggable coordinate={coordinates} onDragEnd={(event) => this.onLongPressMap(event, inArray, inObject)}/>
                </MapView>
        );
    }
}

function mapStateToProps(state){
    return {
      ...state,
    };
  }

export default connect(mapStateToProps)(MapComp);

const styles = StyleSheet.create({
    mapView: {
        width:'100%',
        height:250,
    }
  });