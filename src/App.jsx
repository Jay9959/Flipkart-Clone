import { Route, Routes } from "react-router"
import Home from "./Component/Home"
import Header from "./Component/Header"
import Footer from "./Component/footar"
import ViewProduct from "./Component/ViewProduct"
import AddToCard from "./Component/Add-To-Card"
import Checkout from "./Component/Checkout"
import LoginForm from "./Component/login"
import SignupForm from "./Component/Signup"
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchResults from "./Component/SearchResults"

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ViewProduct/:id" element={<ViewProduct />} />
        <Route path="/AddToCard" element={<AddToCard />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
