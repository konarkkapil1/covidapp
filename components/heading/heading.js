import React from 'react'
import {View,Text} from 'react-native'

class Heading extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={{marginVertical:20}}>
                <Text style={{marginHorizontal:20,fontSize:20,fontWeight:'500'}}>{this.props.title}</Text>
                {
                    this.props.date ? <Text style={{marginHorizontal:20}}>{this.props.date.toLocaleString()}</Text> : null
                }
                
            </View>
        )
    }
}

export default Heading