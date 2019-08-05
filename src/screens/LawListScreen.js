import React from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import Appbar from '../components/Appbar';
import ListItem from '../components/ListItem';
import jsonData from "../../assets/law.json" ;



class LawListScreen extends React.Component{
    static navigationOptions = {
        title: '選択画面',
    };

    constructor(props){
        super(props);
        this.state = {
            story1:jsonData['story1'],
            story2:jsonData['story2'],
        };
    }

    
    
    render(){
        

        return(
            <ScrollView style={styles.container}>
                <Text style={styles.itemTitle}>第一章　総則</Text>
                <FlatList
                    data={this.state.story1}
                    renderItem={({item}) => <ListItem navigation={this.props.navigation} title={item.title} item={item}/>}
                />

                <Text style={styles.itemTitle}>第二章　免許</Text>
                <FlatList
                    data={this.state.story2}
                    renderItem={({item}) => <ListItem navigation={this.props.navigation} title={item.title} item={item}/>}
                />


                <Text style={styles.itemTitle}>第三章　試験</Text>
                

                <Text style={styles.itemTitle}>第三章の二　臨床研修</Text>
                

                <Text style={styles.itemTitle}>第四章　業務</Text>
                

                <Text style={styles.itemTitle}>第五章　歯科医師試験委員</Text>
                

                <Text style={styles.itemTitle}>第六章　罰則</Text>
                



            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:'100%',
        backgroundColor: '#F0EFF5',
        marginBottom:50,
        borderRadius: 0,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
      },
    itemTitle:{
        fontSize:15,
        paddingTop:30,
        paddingBottom:5,
        paddingLeft:16,
        fontWeight:'100',
        color:'#3e3e3e',
        
    
    },
    
});

export default LawListScreen;