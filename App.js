import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, FlatList } from 'react-native';
import LembreteItem from './components/LembreteItem';
import LembreteInput from './components/LembreteInput';




export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.contador}</Text>
        <Button
          title="Somar +1 no contador"
          onPress={() => { this.setState({ contador: this.state.contador + 1 }) }} />

        <Button
          title="+"
          onPress={() => props.onAdicionarLembrete(lembrete)}
        />
);
}
}

        <View style={styles.container}>
          <Text>{this.state.contador}</Text>
          <Button
            title="SORTEIO"
            onPress={() => { this.setState({ contador: this.state.contador + 1 }) }}
          />
        </View>

        <View style={styles.telaPrincipalView}>
          <LembreteInput />
          <FlatList
            data={lembretes}
            renderItem={
              lembrete => (
                <LembreteItem lembrete={lembrete.item.value} />
              )
            } />
        </View>
      </View>
    );
  }




  const adicionarLembrete = (lembrete) => {
    setLembretes(lembretes => {
      console.log(lembretes);
      setContadorLembretes(contadorLembretes + 1);
      return [{ key: contadorLembretes.toString(), value: lembrete }, ...lembretes];
    })
    //console.log (lembrete);
  };


  const capturarLembrete = (lembrete) => {
    setLembrete(lembrete);
  };



  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'gray',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });