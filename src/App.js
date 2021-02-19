import "./App.css";
import LDHeader from "./components/LDHeader/LDHeader";
import About from "./components/About/About";
import Works from "./components/Works/Works";
import Footer from "./components/Footer/Footer";
import Timeline from "./components/Timeline/Timeline";
import Contact from "./components/Contact/Contact";
import { applyMiddleware, combineReducers, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import mainReducer from "./store/reducers";
import Ad from "./components/Ad/Ad";

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
