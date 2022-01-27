import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Navigation from "./Components/Shared/Navigation/Navigation";
import Login from "./Components/Login/Login/Login";
import Register from "./Components/Login/Register/Register";
import Footer from "./Components/Shared/Footer/Footer";
import Blogs from "./Components/Blogs/Blogs";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import AuthProvider from "./Components/AuthProvider/AuthProvider";
import BlogDetails from "./Components/BlogDetails/BlogDetails";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import AddBlog from "./Components/Dashboard/AddBlog/AddBlog";
import MakeAdmin from "./Components/Dashboard/MakeAdmin/MakeAdmin";

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <BrowserRouter>
                    <Navigation></Navigation>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/home" element={<Home />}></Route>
                        <Route path="/blog" element={<Blogs />}></Route>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="/register" element={<Register />}></Route>
                        <Route
                            path="/blogDetails/:Id"
                            element={
                                <PrivateRoute>
                                    <BlogDetails />
                                </PrivateRoute>
                            }
                        ></Route>
                        <Route
                            path="/dashboard"
                            element={
                                <PrivateRoute>
                                    <Dashboard />
                                </PrivateRoute>
                            }
                        >
                            <Route
                                path={`/dashboard/addBlog`}
                                element={
                                    <PrivateRoute>
                                        <AddBlog />
                                    </PrivateRoute>
                                }
                            />

                            <Route
                                path={`/dashboard/makeAdmin`}
                                element={
                                    <PrivateRoute>
                                        <MakeAdmin />
                                    </PrivateRoute>
                                }
                            />
                        </Route>
                    </Routes>
                    <Footer></Footer>
                </BrowserRouter>
            </AuthProvider>
        </div>
    );
}

export default App;
