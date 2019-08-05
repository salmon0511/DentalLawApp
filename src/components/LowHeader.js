import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

class LowHeader extends React.Component{
    render(){
        return(
            <View style={styles.lowHeader}>
                    <Text style={styles.lowHeaderTitle} >{this.props.value}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    lowHeader:{
        height:100,
        paddingTop:70,
        paddingLeft:16,
        paddingRight:16,
    },
    lowHeaderTitle:{
        fontSize:25,

    },
});

export default LowHeader;