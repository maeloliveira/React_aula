import React from 'react';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default class App extends React.Component{
  constructor (props){
  super (props);
  this.state = {
  outputText: "Novo Texto"
  }}
  render (){
  return (
  <View style={styles.container}>
  <Text>{this.state.outputText}</Text>
  <Button
  title="Alterar texto"
  onPress={() => {this.setState({outputText: "Texto Inicial"})}}
  />
  </View>
  );
  }}

  
export default function App() {
  const [outputText, setOutputText] = useState('Texto inicial');
  return (
    <View style={styles.container}>
      <Text>Escolha um numero</Text>
      <Button title="Alterar texto"/>
     //<Button title="Alterar texto" onPress={() => {setOutputText("Novo Texto")}}/>
    </View>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
