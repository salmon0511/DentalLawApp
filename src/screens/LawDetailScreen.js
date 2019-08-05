import React from 'react';
import {View, Text, StyleSheet,} from 'react-native';
import LowHeader from '../components/LowHeader';
import LowContent from '../components/LowContent';
// import Appbar from '../components/Appbar';

class LawDetailScreen extends React.Component{
    state = {
        item:"",
    }

    componentWillMount(){
        const {params} = this.props.navigation.state;
        this.setState({item:params.item});

    }
    
    render(){
        console.log(this.state.item);
        return(
            <View style={styles.container}>
                <LowHeader value={this.state.item.title}/>
                <LowContent value={this.state.item.content}/>
      
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:'100%',
        backgroundColor: '#F0EFF5',
    },
    
});

export default LawDetailScreen;