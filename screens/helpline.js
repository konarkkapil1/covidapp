import React from 'react'
import {View,Text,StyleSheet,SafeAreaView,Linking} from 'react-native'
import Header from '../components/header/header'
import Cards from '../components/cards/cards'
import Ionicons from 'react-native-vector-icons/Ionicons';

class Helpline extends React.Component{
    render(){
        return(
            <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
                <View style={styles.container}>
                    <Header name="COVID-19" tagline="CORONA VIRUS HELPLINE" />

                    <View style={{flexDirection:'column',height:50,marginHorizontal:20,marginVertical:20}}>
                        <View style={{flex:1,flexDirection:'row'}}>
                            <Ionicons name="ios-call" style={{marginHorizontal:5,marginTop:2}} size={18}/>
                            <Text onPress={()=>{Linking.openURL('tel:119');}} style={{fontSize:20,fontWeight:'500'}}>Helpline</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Text style={{fontSize:18,fontWeight:'300',marginHorizontal:20}}>+91-11-23978046</Text>
                        </View>
                    </View>

                    <View style={{flexDirection:'column',height:50,marginHorizontal:20,marginVertical:20}}>
                        <View style={{flex:1,flexDirection:'row'}}>
                            <Ionicons name="ios-call" style={{marginHorizontal:5,marginTop:2}} size={18}/>
                            <Text style={{fontSize:20,fontWeight:'500'}}>Toll Free</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Text style={{fontSize:18,fontWeight:'300',marginHorizontal:20}}>1075</Text>
                        </View>
                    </View>

                    <View style={{flexDirection:'column',height:50,marginHorizontal:20,marginVertical:20}}>
                        <View style={{flex:1,flexDirection:'row'}}>
                            <Ionicons name="ios-mail" style={{marginHorizontal:5,marginTop:2}} size={18}/>
                            <Text style={{fontSize:20,fontWeight:'500'}}>Helpline Email</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Text style={{fontSize:18,fontWeight:'300',marginHorizontal:20}}>ncov2019@gov.in</Text>
                        </View>
                    </View>
                    
                    
                </View>
            </SafeAreaView>
            
        )
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    
})

export default Helpline