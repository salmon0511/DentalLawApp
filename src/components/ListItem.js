import React from 'react';
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native';
import AngleIcon from '../elements/AngleIcon';

class ListItem extends React.Component{
    render(){
        return(
            <View>
                
                <TouchableHighlight
                    onPress={()=>{this.props.navigation.navigate('Detail',{item:this.props.item})}}>
                    <View style={styles.itemContent}>
                        <Text style={styles.itemText}>{this.props.title}</Text>
                        <AngleIcon/>
                    </View>
                </TouchableHighlight>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    
    itemContent:{
        backgroundColor:'#fff',
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:16,
        borderRadius: 0,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        flexDirection:'row',
    
    },
    itemText:{
        fontSize:20,
        fontWeight:'300',
    },

});
export default ListItem;