import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';


class LowContent extends React.Component{
    render(){
        return(
            <View style={styles.lowContent}>
                <ScrollView>
                <Text style={styles.lowContentText} value={this.props.value}>
                    {this.props.value}
                </Text>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    lowContent:{
        height:500,
        backgroundColor:'#fff',
        paddingLeft:16,
        paddingRight:16,
        

    },
    lowContentText:{
        fontSize:20,
        lineHeight:25,
    }
});

export default LowContent;