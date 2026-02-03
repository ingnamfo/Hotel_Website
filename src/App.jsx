import { Route,Routes } from "react-router";
import Home from "./Page/Home";
import PublicLayout from "./Layout/PublicLayout";

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
