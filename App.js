import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import CounterApp from './src/CounterApp';
import {createStore} from 'redux';
import {Provider} from 'react-redux';


const intialState ={
  counter:0
}
const reducer = (state = intialState,action) =>{
  switch(action.type)
  {

    case 'INCREASE_COUNTER':
      return{counter:state.counter+1}
    case 'DECREASE_COUNTER':
      return{counter:state.counter-1}

  }
  return state;
}

const store = createStore(reducer)

export class App extends Component {

 
 
  render() {
    return (
      <Provider store={store}>
        <CounterApp/>   
     </Provider>
    );
  }
}

export default App;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',


  },

})
