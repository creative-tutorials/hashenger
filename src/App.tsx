import "./App.css";
import Loader from "./Loader";
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
const ChatPage = lazy(() => import("./pages/ChatPage"));
const Account = lazy(() => import("./pages/account"));
const Profile = lazy(() => import("./pages/profile"));
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
            </Route>
            <Route element={<ProtectedRoute />}>
              <Route path="/profile" element={<Profile />}></Route>
            </Route>
            <Route element={<ProtectedRoute />}>
              <Route path="/friends" element={<FriendsRequest />}></Route>
            </Route>
            <Route element={<ProtectedRoute />}>
              <Route path="/admin" element={<AdminControl />}></Route>
            </Route>
            <Route path="account" element={<Account />}></Route>
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
