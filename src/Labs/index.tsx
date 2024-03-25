import Assignment3 from "./a3";
import Assignment4 from "./a4";
import Nav from "../nav";
import { Routes, Route, Link } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import Assignment5 from "./a5";
function Labs() {
  return (
    <Provider store={store}>
      <div className="container-fluid">
        <h1>Labs</h1>
        <Nav />
        <Routes>
          <Route path="/a3/*" element={<Assignment3 />} />
          <Route path="/a4/*" element={<Assignment4 />} />
          <Route path="/a5/*" element={<Assignment5 />} />
        </Routes>
      </div>
    </Provider>
  );
}
export default Labs;
