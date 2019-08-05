import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import * as Font from 'expo-font'
import fontAwsome from '../../assets/fonts/fa-solid-900.ttf';


class AngleIcon extends React.Component{
    state={
        fontLoaded:false,
    }
    
    async componentDidMount() {
        
        await Font.loadAsync({
          'FontAwsome': fontAwsome,
        });

        this.setState({fontLoaded:true});
    }
    render(){
        return(
            this.state.fontLoaded ? (
                <Text style={styles.itemIcon}>{'\uf105'}</Text>
            ):null
        );
    }
}

const styles = StyleSheet.create({
    itemIcon:{
        fontFamily:'FontAwsome',
        right:16,
        position:'absolute',
        top:'60%',
        color:'#ddd',
        fontSize:16
    }
});

export default AngleIcon;