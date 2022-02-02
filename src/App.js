
import './App.css';
import Form from './Form';
import { Button,Alert,Table } from 'react-bootstrap';
import Formval from './Formval';
import Lloopmap from './Lloopmap';

function App() {
  return (
    <div className="App">
      <h2>Form React</h2>
      <Form />
      <Formval />
      <Button onClick={()=>alert("Hello")}>Click ME</Button>
      {
  
  <Alert variant="success">
    This is a success alert—check it out!
  </Alert>

}
<Lloopmap />
    </div>
  );

}

export default App;
