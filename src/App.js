import { createBrowserRouter,
   Route,
   Routes,
   Link,
   NavLink,
   createRoutesFromElements,
   RouterProvider
   } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import RootLayout from "./layout/RootLayout";
import HelpLayout from "./layout/HelpLayout";
import Faq from "./pages/help/Faq";
import Contact, { contactAction } from "./pages/help/Contact";
import NotFound from "./pages/NotFound";
import CarrersLayout from "./layout/CarrersLayout";
import Carrers, { carrersLoader } from "./pages/carrers/Carrer";
import CarrerDetails, { CarrerDetailsLoader } from "./pages/carrers/CarrerDetails";
import CarrerError from "./pages/carrers/CarrerError";

const router = createBrowserRouter(
  createRoutesFromElements(
        <Route path="/" element={<RootLayout/>} >
          <Route path="/" element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="help" element={<HelpLayout/>} >
            <Route path="faq" element={<Faq />} />
            <Route path="contact" element={<Contact />} action={contactAction} />
          </Route>
          <Route path="carrers" element={<CarrersLayout />} errorElement={<CarrerError />} >
            <Route index 
            element={<Carrers />} 
            loader={carrersLoader}
            />
            <Route path=":id"
            element={<CarrerDetails />} 
            loader={CarrerDetailsLoader}
            
            />
          </Route>


          <Route path="*" element={<NotFound />} />
        </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
