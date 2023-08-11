import { BrowserRouter,Routes,Route } from "react-router-dom";

import Header from "./feature/website/component/Header";
import Footer from "./feature/website/component/Footer";

import Checklist from "./feature/website/pages/Checklisy";

function App() {
  return (
   <BrowserRouter>
      <Routes>
      
          <Route path="/checklist" index element={<><Header/><Checklist/><Footer/></>}></Route>
         
      </Routes>
   </BrowserRouter>
  );
}

export default App;
