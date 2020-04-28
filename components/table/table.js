import React from 'react'
import { Text,View,StyleSheet,ScrollView } from 'react-native'

class Table extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={styles.tableContainer}>
                <View style={styles.headingContainer}>
                    <Text style={styles.heading}>STATE</Text>
                    <Text style={styles.heading}>CASES</Text>
                    <Text style={styles.heading}>RECOVERED</Text>
                    <Text style={styles.heading}>DEATHS</Text>
                </View>
                <View style={styles.bodyContainer}>

                    <ScrollView scrollEventThrottle={16}>
                        {
                            this.props.data.map(state => (
                                <View style={styles.data}>
                                    <Text key={state.loc} style={styles.tableData}>{state.loc}</Text>
                                    <Text key={state.loc} style={styles.tableData}>{state.totalConfirmed}</Text>
                                    <Text key={state.loc} style={styles.tableData}>{state.discharged}</Text>
                                    <Text key={state.loc} style={styles.tableData}>{state.deaths}</Text>
                                </View>
                            ))
                        }
                    </ScrollView>

                </View>
            </View>
        )

    }
}

const styles = StyleSheet.create({
    tableContainer:{
        marginTop:20,
        // backgroundColor:'pink',
        height:'20%'
    },
    headingContainer:{
        flexDirection:'row',
        backgroundColor:'#e6e8ef',
        paddingVertical:10
    },
    heading:{
        flex:1,
        fontSize:13,
        textAlign:'center'
    },
    bodyContainer:{
        paddingHorizontal:4,
        height:300
    },
    tableData:{
        flex:1,
        textAlign:'center',
        alignItems:'center',
        paddingVertical:5,
        fontWeight:'500'
    },
    data:{
        flexDirection:'row',
        borderBottomColor:"#ddd",
        borderBottomWidth:1,
        paddingVertical:10,
    },
    
})

export default Table