import React from 'react';
import { StyleSheet, View, SafeAreaView,ScrollView,ActivityIndicator } from 'react-native';

import Header from '../components/header/header'
import LiveUpdate from '../components/liveUpdate/liveUpdate'
import Heading from '../components/heading/heading'
import Table from '../components/table/table'
import axios from 'axios'

export default class Live extends React.Component {
  constructor(props){
    super(props)
    this.state={
        current:[],
        loading:true,
        lastUpdate:'',
        regional: []
    }
  }

  fetchData = () => {
    this.setState({loading:true})
    axios.get("https://api.rootnet.in/covid19-in/stats/latest")
      .then(response => {
        this.setState({'current':response.data.data.summary});
        this.setState({'lastUpdate':response.data.lastRefreshed})
        this.setState({'regional': response.data.data.regional})
        this.setState({loading:false})
      })
      .catch(err => console.log(err))
      
  }

  componentDidMount(){
    this.fetchData()
  }

  render(){
    const date = new Date(this.state.lastUpdate)
    return (
      <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
        <View style={styles.container}>
          
          
          <Header name="COVID-19" tagline="STAY HOME STAY SAFE"/>
          { this.state.loading ? <View><ActivityIndicator size="large" style={{marginTop:100}}/></View> :
            <ScrollView scrollEventThrottle={16}>
              
              <Heading title="LIVE UPDATES" date={date} />
              <LiveUpdate current={this.state.current} lastUpdate={this.state.lastUpdate} />
              
              <Heading title="STATES" />
              <Table data={this.state.regional} />

            </ScrollView>
          }
          
        </View>
      </SafeAreaView>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
});
