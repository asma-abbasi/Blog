import { Provider } from "react-redux";
import Store from "./shared/Redux/Store";
import AppRouts from "./shared/Routs/AppRouts";

function App() {
  return (
    <Provider store={Store}>
        <AppRouts/>
    </Provider>
  );
}

export default App;
