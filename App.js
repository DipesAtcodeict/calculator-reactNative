import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './utils/styles';

export default function App() {
  const [exp, setExp] = useState('');
  const [ans, setAns] = useState('');
  const [prevExp, setPrevExp] = useState('');

  const handleClearPress = () => {
    styles.result = { ...styles.result, backgroundColor: '#221f29' };
    setExp('');
    setAns('');
  };

  const handleDelete = () => {
    setExp(exp.slice(0, -1));
  };

  const handleBtnPress = (pressedValue) => {
    setExp(exp + pressedValue);
    setPrevExp(pressedValue);
  };

  const handleOpBtnPress = (pressedOp) => {
    if (
      prevExp == '/' ||
      prevExp == '*' ||
      prevExp == '%' ||
      prevExp == '-' ||
      prevExp == '+'
    ) {
      return;
    }
    if (
      (prevExp == '' && pressedOp == '%') ||
      pressedOp == '*' ||
      pressedOp == '/'
    ) {
      return;
    }
    setExp(exp + pressedOp);
    setPrevExp(pressedOp);
  };

  const getAnswer = () => {
    setAns(eval(exp));
    styles.result = { ...styles.result, backgroundColor: '#445e4e' };
  };

  return (
    <View style={styles.container}>
      <View style={styles.calculation}>
        <Text style={styles.calculationText}>{exp}</Text>
      </View>
      <View style={styles.result}>
        <Text style={styles.resultText}>{ans}</Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.numbers}>
          <View style={styles.row}>
            <TouchableOpacity onPress={handleClearPress}>
              <Text style={styles.btnText}>C</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleOpBtnPress('%')}>
              <Text style={styles.btnText}>%</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDelete}>
              <Text style={styles.btnText}>D</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity onPress={() => handleBtnPress('7')}>
              <Text style={styles.btnText}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleBtnPress('8')}>
              <Text style={styles.btnText}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleBtnPress('9')}>
              <Text style={styles.btnText}>9</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity onPress={() => handleBtnPress('4')}>
              <Text style={styles.btnText}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleBtnPress('5')}>
              <Text style={styles.btnText}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleBtnPress('6')}>
              <Text style={styles.btnText}>6</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity onPress={() => handleBtnPress('1')}>
              <Text style={styles.btnText}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleBtnPress('2')}>
              <Text style={styles.btnText}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleBtnPress('3')}>
              <Text style={styles.btnText}>3</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity onPress={() => handleBtnPress('0')}>
              <Text style={[styles.btnText, styles.btnText0]}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleBtnPress('.')}>
              <Text style={[styles.btnText, styles.btnDot]}>.</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.operations}>
          <TouchableOpacity onPress={() => handleOpBtnPress('/')}>
            <Text style={styles.btnText}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleOpBtnPress('*')}>
            <Text style={styles.btnText}>*</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleOpBtnPress('-')}>
            <Text style={styles.btnText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleOpBtnPress('+')}>
            <Text style={styles.btnText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={getAnswer}>
            <Text style={styles.btnText}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
