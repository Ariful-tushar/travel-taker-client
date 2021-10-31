import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login/Login";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";
import NotFound from "./Components/NotFound/NotFound";
import Footer from "./Components/Shared/Footer/Footer";
import Header from "./Components/Shared/Header/Header";
import AuthProviver from "./Context/Context";
import Booking from "./Components/Booking/Booking";
import MyOrders from "./Components/MyOrders/MyOrders/MyOrders";
import ManageOrders from "./Components/ManageOrders/ManageOrders/ManageOrders";
import AddPackages from "./Components/AddPackages/AddPackages";
import Error from "./Components/Login/Error/Error";

function App() {
  return (
    <div className="App">
      <AuthProviver>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/loginerror">
              <Error></Error>
            </Route>
            <PrivateRoute path="/booking/:packageId">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path="/myorders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/manageorders">
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <PrivateRoute path="/addpackage">
              <AddPackages></AddPackages>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProviver>
    </div>
  );
}

export default App;
