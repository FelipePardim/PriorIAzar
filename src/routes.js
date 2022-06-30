import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home/Home";
import Home1 from "./Home1";
import PriorizedTasks from "./pages/PriorizedTasks/PriorizedTasks";

const Routes = () => {
 return (
  <BrowserRouter>
   <Route component={ Home1 } path="/" exact />
   <Route component={PriorizedTasks} path="/priorizedTasks" />
  </BrowserRouter>
 )
}

export default Routes;