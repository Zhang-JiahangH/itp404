import "bootstrap/dist/css/bootstrap.css";
import '../CSS/App.css';
import Navbar from '../Components/navbar';
import { Outlet } from "react-router-dom";
import { createStandaloneToast } from '@chakra-ui/toast'

const {ToastContainer} = createStandaloneToast()

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
