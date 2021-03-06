import "./App.css";
import LDHeader from "./components/LDHeader/LDHeader";
import About from "./containers/About/About";
import Works from "./containers/Works/Works";
import Footer from "./containers/Footer/Footer";
import Timeline from "./containers/Timeline/Timeline";
import Contact from "./containers/Contact/Contact";
import { applyMiddleware, combineReducers, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import mainReducer from "./store/reducers";
import Ad from "./containers/Ad/Ad";
import 'fontsource-roboto';

function App() {
  const rootReducer = combineReducers({
    mainStore: mainReducer,
  });
  // const logger = createLogger();
  const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

  return (
    <Provider store={store}>
      <div className="App">
        <LDHeader />
        <Ad />
        <About />
        <Works />
        <Timeline />
        <Contact />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
