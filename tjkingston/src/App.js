import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
]);

function App() {
    return (
        <div className="App">
            {" "}
            <div className="container">
                <RouterProvider router={router} />
            </div>
        </div>
    );
}

export default App;
