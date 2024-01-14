import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";
import { DefaultLayout } from "./components/Layouts";
import { Fragment } from "react";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Layout: React.FC<{ children?: React.ReactNode }> = DefaultLayout;
                        if (route.layout === null) {
                            Layout = Fragment as React.FC<{ children?: React.ReactNode }>; // Make sure to cast Fragment to React.FC
                        } else if (route.layout !== undefined) {
                            Layout = route.layout as React.FC<{ children?: React.ReactNode }>; // Make sure to cast route.layout to React.FC
                        }
                        
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            ></Route>
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
