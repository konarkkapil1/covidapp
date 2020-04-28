import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from'react-native'
import Cards from '../cards/cards'

class liveUpdate extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        
        return(
            <View style={{width:'100%',alignItems:'center'}}>
                
                <View style={styles.cardContainer}>
                    <TouchableOpacity>
                        <Cards heading="CASES" image={require('../../assets/cough.png')} color="yellow" value={this.props.current.total} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Cards heading="RECOVERED" image={require('../../assets/patient.png')} value={this.props.current.discharged} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Cards heading="DEATHS" image={require('../../assets/death.png')} value={this.props.current.deaths} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cardContainer:{
        flex:1,
        flexDirection:'row',
        marginVertical:10
      }
})

export default liveUpdate