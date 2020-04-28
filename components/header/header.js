import React from 'react'
import {View,Text,StyleSheet,ImageBackground} from 'react-native'

class Header extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return( 
            <View style={styles.header}>
                <Text style={{marginTop:30,marginHorizontal:20,fontSize:24,fontWeight:'700'}}>{this.props.name}</Text> 
                <Text style={{marginHorizontal:20,fontWeight:'300',fontSize:15}}>{this.props.tagline}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    header:{
        borderBottomColor:'#ddd',
        borderBottomWidth:2,
        height:100
    }
})
export default Header