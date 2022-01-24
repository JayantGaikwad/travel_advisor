import React from "react";
import {CssBaseline,Grid} from '@material-ui/core';
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import List from "./components/List/List";

const App = ()  => {
return (
    <>
    <CssBaseline/>
    <Header/>
    <List/>
    </>
);
}
export default App;