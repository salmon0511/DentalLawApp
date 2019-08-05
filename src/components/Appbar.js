import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Appbar extends React.Component{
    render(){
        return(
            <View style={styles.appbar}>
                <Text style={styles.appbarText}>選択画面</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    appbar:{
        paddingTop:45,
        height:90,
        backgroundColor:'#fff',
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        justifyContent:'center',
    
    },
    appbarText:{
        fontSize:20,
        textAlign:'center',
        fontWeight:'400',
        
    },
});

export default Appbar;