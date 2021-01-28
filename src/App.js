import './App.css';
import Form1 from './components/Form/Form1';
import { Provider } from 'react-redux'
import { store } from './reducers/store'
function App() {
  return (
    <div className="App">
      <Provider store={store} >
        <Form1 />
      </Provider>
    </div>
  );
}

export default App;
