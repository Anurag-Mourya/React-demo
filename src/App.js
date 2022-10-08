// import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
// import Navbar from "./homeComponents/Navbar";
export default function App() {
    return (
        <>
            <div>
                <BrowserRouter>
                    {/* <Navbar /> */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        {/* <Route path="/wallet" element={<Wallet/>}/>
                        <Route path="/addMoney" element={<AddMoney/>}/> */}
                    </Routes>
                </BrowserRouter>

            </div>

        </>
    )
}