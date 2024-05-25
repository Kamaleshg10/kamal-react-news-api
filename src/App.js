import { useState } from "react";
import Navbar from "./components/Navbar";
import Newsboard from "./components/Newsboard";
import './App.css'

export const App = () => {
    const [category, setCategory] = useState('general')
    return (
        <>
            <Navbar setCategory={setCategory} />
            <Newsboard category={category} />
        </>
    );
};

export default App;
