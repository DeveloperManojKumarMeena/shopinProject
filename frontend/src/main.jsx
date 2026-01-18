import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Shoproutes from "./routes/shop.routes.jsx";
import Navbar from "./pages/Navbar.jsx";




createRoot(document.getElementById("root")).render(

    
      <BrowserRouter>
      
      <App/>
     
      </BrowserRouter>
     
   
 ,
);
