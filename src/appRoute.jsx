import { Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Category from "./pages/categories"
import PostItem from "./pages/postItem"
import Basket from "./pages/basket"
import Login from "./pages/login"

function AppRoute() {
    return (
        <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/category/:name" element={<Category />} />
             <Route path="/category/:name/post" element={<PostItem />} />
             <Route path="/basket" element={<Basket />} />
             <Route path="/login" element={<Login/>} />
        </Routes>
    )
}

export default AppRoute
