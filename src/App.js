import React from 'react';
import './App.css';
import { Button, Typography, Space, Select,  Input, AutoComplete } from 'antd';
import 'antd/dist/antd.css';

const { Option } = Select;

const options = [
  { value: 'Alergia 1' },
  { value: 'Alergia 2' },
  { value: 'Alergia 3' },
];

const Complete = () => (
  <AutoComplete
    style={{
      width: 200,
    }}
    options={options}
    placeholder="try to type `b`"
    filterOption={(inputValue, option) =>
      option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    }
  />
);


function eventoOnFocus() {
  console.log("Evento OnFocus");
}

const eventoOnBlur =() => {
  console.log("Evento OnBlur");

}





function App() {
  return (
   <div className = 'App'>
     <br/> <br/>

      <Select
      placeholder = "Selecciona una Alergia"
      showArrow
      optionFilterProp = "children"
      className = "selectAnt"
      mode = "multiple"
      onFocus = {eventoOnFocus}
      onBlur = {eventoOnBlur}
      >
      <Option value="1">Alergia 1</Option> 
      <Option value="2">Alergia 2</Option>
      <Option value="3">Alergia 3</Option>
      <Option value="4">Alergia 4</Option>
      <Option value="5">Alergia 4</Option>
      <Option value="6">Alergia Ram </Option>
      <Option value="">Alergia Alam </Option>
      </Select>

     


         </div>



  );
}

export default App;