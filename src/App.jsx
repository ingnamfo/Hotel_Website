import { Route,Routes } from "react-router";
import Home from "./Page/Home";
import PublicLayout from "./Layout/PublicLayout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const App = () => {
  return (
   <Routes>
    <Route path ="/" element={<PublicLayout/>}>
    <Route index element={<Home/>}/>
   
    </Route>
   </Routes>
  );
};
export default App;
