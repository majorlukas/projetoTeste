import React,{Component} from 'react'
import {View,Text,TextInput,StyleSheet,TouchableOpacity} from 'react-native'
import {styles} from './styles'

export default class app extends Component{



constructor(props){
  super(props)
  this.state = {nota1: 0, nota2: 0, faltas: 0, resultado: ''}
this.calcular = this.calcular.bind(this)
}

calcular(){
  
  let num1 = parseInt(this.state.nota1)
  let num2 = parseInt(this.state.nota2)
  let media = (num1 + num2) /2

  if(media >=6 && this.state.faltas <= 10){
this.setState({resultado:'Aluno foi Aprovado'})
  }else{
    this.setState({resultado:'Aluno foi reprovado'})
  }

}

  render(){
    return(
      <View style={styles.View}>
        <TextInput style={styles.TextInput}
        onChangeText={(nota1) => {this.setState({nota1})}}
        keyboardType='numeric'
        placeholder='nota 1'
        />
       <TextInput style={styles.TextInput}
       onChangeText={(nota2) => {this.setState({nota2})}}
        keyboardType='numeric'
        placeholder='nota 2'
       />
       <TextInput style={styles.TextInput}
       onChangeText={(faltas) => {this.setState({faltas})}}
        keyboardType='numeric'
        placeholder='numero de faltas'
       />
       <TouchableOpacity style={styles.button} onPress={this.calcular}>
        <Text style={styles.textButton}>Resultado</Text>
       </TouchableOpacity>
       <Text style={styles.textResultado}>{this.state.resultado}</Text>
      </View>
    )
  }
}