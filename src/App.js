import "./App.css";
import Form from "./Components/Body/Form";
import Home from "./Components/Body/Home";
import Packages from "./Components/Body/Packages";
import Timing from "./Components/Body/Timing";
import Footer from "./Components/Layout/Footer";
import Header from "./Components/Layout/Header";
import Navigator from "./Components/UI/Navigator";
import React, { useState } from "react";

function App() {
  const [showForm, setShowForm] = useState(false);

  const showFormHandler = () => {
    setShowForm(true);
  };

  const hideFormHandler = () => {
    setShowForm(false);
  };

  return (
    <>
      <Navigator />
      <Header />
      <Home />
      <Packages onShowForm={showFormHandler} />
      <Timing />
      <Footer />
      {showForm && <Form onHideForm={hideFormHandler} />}
    </>
  );
}

export default App;
