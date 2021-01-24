import './App.css';
import Form1 from './components/Form/Form1';
import { Provider } from 'react-redux'
import { store } from './reducers/store'
function App() {
  return (
    <Provider store={store} >
      <Form1 />
    </Provider>
  );
}

export default App;
