

import Button from './components/Button';
import Input from './components/Input';
import {Container, Content, Row} from './styles';

import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');


  const handleConcatData = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  } 

  const handleClearCalc = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
  }

  const handleSumNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    }else {
      const calcSum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(calcSum));
      setOperation('')
    }
  }

  const handleSubNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    }else {
      const calcSum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(calcSum));
      setOperation('')
    }
  }


  const handleMultNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('*');
    }else {
      const calcSum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(calcSum));
      setOperation('')
    }
  }

  const handleDivNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    }else {
      const calcSum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(calcSum));
      setOperation('')
    }
  }


  const EqualAll = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0' ){
      switch(operation){
        case '+' : 
        handleSumNumbers();
        break;
        case '-' :
          handleSubNumbers();
          break;
        case '*':
          handleMultNumbers();
          break;
        case '/' :
          handleDivNumbers();
          break;
        default:
          alert('Calculo errado por favor corrigir!')
        break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label={1}  onClick={() => handleConcatData('1')} />
          <Button label={2}  onClick={() => handleConcatData('2')} />
          <Button label={3}  onClick={() => handleConcatData('3')} />
          <Button label={4}  onClick={() => handleConcatData('4')} />
          <Button label={5}  onClick={() => handleConcatData('5')} />
        </Row>
        <Row>
          <Button label={6}   onClick={() => handleConcatData('6')} />
          <Button label={7}   onClick={() => handleConcatData('7')} />
          <Button label={8}   onClick={() => handleConcatData('8')} />
          <Button label={9}   onClick={() => handleConcatData('9')} />
          <Button label={'/'} onClick={handleDivNumbers} />
        </Row>
        <Row>
          <Button label={'*'} onClick={handleMultNumbers}/>
          <Button label={'+'} onClick={handleSumNumbers}/>
          <Button label={'='} onClick={EqualAll}/>
          <Button label={'C'} onClick={handleClearCalc}/>
          <Button label={'-'} onClick={handleSubNumbers}/>
        </Row>

      </Content>
    </Container>
  );
}

export default App;
