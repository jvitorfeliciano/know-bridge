import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/styles";
import AuthRouteGuard from "./components/AuthRouteGuard";
import Header from "./components/Header";
import ProtectedRouteGuard from "./components/ProtectedRouteGuard";
import { UserProvider } from "./contexts/userContext";
import FieldPage from "./pages/FieldPage";
import HomePage from "./pages/HomePage";
import MaterialsPage from "./pages/MaterialsPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import TrailPage from "./pages/TrailPage";
import TrailsPage from "./pages/TrailsPage";
import UserPage from "./pages/UserPage";
import Courses from "./pages/UserPage/Courses";

function App() {

    console.log("passei no app")
    return (
        <UserProvider>
            <BrowserRouter>
                <GlobalStyle />
                <Header />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <AuthRouteGuard>
                                <HomePage />
                            </AuthRouteGuard>
                        }
                    />
                    <Route
                        path="/sign-up"
                        element={
                            <AuthRouteGuard>
                                <SignUp />
                            </AuthRouteGuard>
                        }
                    />
                    <Route
                        path="/sign-in"
                        element={
                            <AuthRouteGuard>
                                <SignIn />
                            </AuthRouteGuard>
                        }
                    />
                    <Route
                        path="/user/:userName/"
                        element={
                            <ProtectedRouteGuard>
                                <UserPage />
                            </ProtectedRouteGuard>
                        }
                    >
                        <Route path="courses" element={<Courses />} />
                    </Route>
                    <Route path="/trails" element={<TrailsPage />} />
                    <Route path="/trails/:trailId" element={<TrailPage />} />
                    <Route path="/field/:fieldId" element={<FieldPage />} />
                    <Route path="/materials/:subfieldId/type/:type/adress/:adressId" element={<MaterialsPage />} />
                </Routes>
            </BrowserRouter>
        </UserProvider>
    );
}

export default App;
