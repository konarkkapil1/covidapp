import React from 'react'
import { View,Text,StyleSheet,Image } from 'react-native'

class Cards extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View>
                <View style={styles.cardContainer}>
                   
                    <View style={styles.cardHeading}>
                        <Image source={this.props.image} style={{height:30,width:30}}/>
                        <Text style={{fontSize:15,fontWeight:'300',textAlign:'center'}}>{this.props.heading}</Text>
                    </View>

                    <View style={styles.cardBody}>
                        <Text style={{textAlign:'center',fontSize:28}}>{this.props.value}</Text>
                    </View>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cardContainer:{
        flex:1,
        width:115,
        height:120,
        borderRadius:5,
        borderColor:'#ddd',
        borderWidth:1,
        marginHorizontal:5
    },
    cardHeading:{
        fontSize:18,
        textAlign:'center',
        fontWeight:'400',
        flex:1,
        alignItems:'center',
        marginTop:10,
        flexDirection:'column'
    },
    cardBody:{
        flex:1,
        fontSize:28,
        fontWeight:'300',
        textAlign:'center'
    }
})

export default Cards