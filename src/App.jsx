import { BrowserRouter } from "react-router-dom";
import { store } from './store';
import { AppRouter } from './router';
import { Provider } from 'react-redux';

export function App() {


  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  )
}