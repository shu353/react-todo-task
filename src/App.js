import { Route, Switch } from "react-router-dom";

import Heading from "./components/Heading";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import { ContexProvider } from "./context/GlobalContext";

import "./App.css";

function App() {
  return (
    <div>
      <div className="h-screen text-white text-center p-10">
        <div className="container mx-auto h-full ">
          <ContexProvider>
            <Heading />

            <Switch>
              <Route path="/" component={TaskList} exact />
              <Route path="/add" component={TaskForm} />
              <Route path="/edit/:id" component={TaskForm} />
            </Switch>
          </ContexProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
