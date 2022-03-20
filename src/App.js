import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Layout/Footer/Footer";
import Navbar from "./Components/Layout/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import NotFound from "./Pages/NotFound/NotFound";
import Alert from "./Components/Layout/Alert/Alert";
import User from "./Pages/User/User";
import { GithubProvider } from "./Github/GithubContext/GithubContext";
import { AlertProvider } from "./Github/Alert/AlertContext/AlertContext";
const App = () => {
  return (
    <GithubProvider>
      <BrowserRouter>
        <AlertProvider>
          <div className="flex flex-col justify-between h-screen font-monorope">
            <Navbar />
            <main className="container px-3 mx-auto mb-12">
              <Alert />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user/:login" element={<User />} />
                <Route path="/notfound" element={<NotFound />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </AlertProvider>
      </BrowserRouter>
    </GithubProvider>
  );
};

export default App;
