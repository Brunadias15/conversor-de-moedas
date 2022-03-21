import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet,TouchableOpacity} from 'react-native'


export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {real: 0, dolar: 5}
    this.calcular = this.calcular.bind(this)

  }
  calcular(){
    
    let real = parseFloat(this.state.real.replace(',','.'))
    let dolar = parseFloat(this.state.dolar)
    let conver = real / dolar
    conver = conver.toFixed(2)
    
    
    this.setState({conver})
  
    
    
    console.log(this.state)
    

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textTitulo}>CONVERSOR DE MOEDA</Text>
        <Text style={styles.textSub}>BRL para USD</Text>
        <TextInput style={styles.textInput}
        onChangeText={(real) => {this.setState({real})}}
        keyboardType='numeric'
        placeholder='Digite o valor em BRL'
        />
        <TouchableOpacity style={styles.button} onPress={this.calcular}>
          <Text style={styles.textButton}>CONVERSOR</Text>
        </TouchableOpacity>
        <Text style={styles.textResul}>USD: {this.state.conver}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#000'
  },
  textInput:{
    padding: 30,
    backgroundColor: '#cccccc',
    marginLeft: 50,
    marginRight: 50,
    marginTop: 30,
    fontSize: 20
  },
  button:{
    margin: 20,
    padding: 20,
    borderRadius: 50,
    backgroundColor: '#ebca00'
  },
  textButton:{
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf:'center'
  },
  textResul:{
    color:'#ebca00',
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  textTitulo:{
    marginTop:70,
    color:'#ebca00',
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  textSub:{
    marginTop: 20,
    color:'#ebca00',
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center'
  }
})

