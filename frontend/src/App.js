import React from 'react';
import './App.css';
import Header from "./components/Header";
import {Routes, Route} from "react-router-dom";
import Find from "./components/find";
import StartPage from "./components/StartPage";
import PatientRegistration from "./components/PatientRegistration";
import ManagingMedicalRecords from "./components/ManagingMedicalRecords";
import Analyzes from "./components/Analyzes";
import Images from "./components/Images";
import Info from "./components/Info";


const App = () => {
  return <div className="App">
    <Header/>
    <Routes>
      <Route path={'/'} element={<StartPage/>}/>
      <Route path={'/patient_registration'} element={<PatientRegistration/>}/>
      <Route path={'/managing_medical_records'} element={<ManagingMedicalRecords/>}/>
      <Route path={'/analyzes'} element={<Analyzes/>}/>
      <Route path={'/images'} element={<Images/>}/>
      <Route path={'/info'} element={<Info/>}/>
      <Route path={'/authorization'} element={<Find/>}/>
    </Routes>
  </div>
}

export default App;
