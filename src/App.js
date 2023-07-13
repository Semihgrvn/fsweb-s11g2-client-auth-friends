import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import FriendsList from "./components/FriendsList";
import Logout from "./components/Logout";
import AddFriend from "./components/AddFriend";
import AuthContextProvider from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/login" component={Login} />
          <ProtectedRoute path="/friends">
            <FriendsList />
          </ProtectedRoute>
          <ProtectedRoute path="/friends_add">
            <AddFriend />
          </ProtectedRoute>
          <ProtectedRoute path="/logout">
            <Logout />
          </ProtectedRoute>
        </Switch>
      </div>
    </AuthContextProvider>
  );
}

export default App;