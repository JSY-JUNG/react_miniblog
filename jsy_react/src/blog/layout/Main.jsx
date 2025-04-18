import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Home from "../pages/Home.jsx";
import Write from "../pages/Write.jsx";
import PostDetail from "../pages/PostDetail.jsx";

function Main() {
    return (
        <div>
            <BrowserRouter>
                <Header/>
                <main>
                    <Routes>
                        <Route path={"/"} element={<Home />} />
                        <Route path={"/write"} element={<Write />} />
                        <Route path={'/posts/:postIdx'} element={<PostDetail />} />
                    </Routes>
                </main>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default Main