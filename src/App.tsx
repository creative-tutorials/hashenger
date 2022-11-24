import "./App.css";
import Loader from "./Loader";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import ProtectRoute_ from './Protected-Route';
const ChatPage = lazy(() => import("./pages/chat"));
const Register = lazy(() => import("./pages/register"));
const Login = lazy(() => import("./pages/login"));
const Profile = lazy(() => import("./pages/profile"));
const ChatID_Create = lazy(() => import("./pages/id_generate"));
const NotFound = lazy(() => import("./pages/404"));
const FriendsRequest = lazy(() => import("./pages/friends"));
const AdminControl = lazy(() => import("./pages/admin"));
function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<ChatPage />}></Route>
              <Route path="profile" element={<Profile />}></Route>
              <Route path="friends" element={<FriendsRequest />}></Route>
              <Route path="admin" element={<AdminControl />}></Route>
              <Route path="id/generate" element={<ChatID_Create />}></Route>
            </Route>
            <Route element={<ProtectRoute_ />}>
              <Route path="register" element={<Register />}></Route>
              <Route path="login" element={<Login />}></Route>
            </Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
