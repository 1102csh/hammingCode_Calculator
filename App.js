import { ScrollView ,Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import Chart from './components/Chart'
import { Operator } from './components/Calculator'
import SerialBtn from './components/SerialBtn'
import ModeBtn from './components/ModeBtn'

export default function App() {

  const [serialNumber, setSerialNumber] = useState("");
  const [codeNumber, setCodeNumber] = useState("");
  const [mode, setMode] = useState("1600");

  const chartSize = 8;
  const [chart, setChart] = useState(
    Array.from({ length: chartSize }, () => Array(chartSize).fill(0))
  );

  useEffect(() => {
    if (codeNumber && serialNumber) {
      Operator(codeNumber, serialNumber, chart, setChart, mode);
    }
  }, [serialNumber, mode]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.txt}>Code Number : </Text>
      <TextInput
        style={styles.textInput}
        value={codeNumber}
        onChangeText={setCodeNumber}
      >
      </TextInput>

      <Text style={styles.txt}>Serial Number : </Text>
      <View style={styles.snContainer}>
        <TextInput
          style={styles.textInput}
          value={serialNumber}
          onChangeText={setSerialNumber}
        >
        </TextInput>

        <SerialBtn
          serialNumber={serialNumber}
          setSerialNumber={setSerialNumber}
        />
      </View>

      <ModeBtn
        mode={mode}
        setMode={setMode}
      />

      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          Operator(codeNumber, serialNumber, chart, setChart, mode);
        }}
      >
        <Text style={styles.calText}>계산 실행</Text>
      </TouchableOpacity>

      <Chart
        chart={chart} mode={mode}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: '#111111',
  },
  textInput: {
    width: '60%',
    height: 55,
    borderRadius: 3,
    backgroundColor: 'yellow',
    color: 'red',
    fontSize: 22,
    fontWeight: 'bold',

    paddingLeft: 10,
    margin: 10
  },
  btn: {
    width: '95%',
    height: 50,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 3,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '2.5%',
  },
  txt: {
    fontSize: 18,
    color: 'green'
  },
  calText: {
    color: 'green',
    fontSize: 20,
  },
  snContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  }
});
