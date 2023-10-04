	import React from "react";
	import Stack from 'react-bootstrap/Stack';
	import Container from "react-bootstrap/Container";
	import Row from 'react-bootstrap/Row';
	import Col from 'react-bootstrap/Col';
	

	import  AuthForm from "../authform/authform";
	import Managelanguages from "../managelanguages/managelanguages";
	import About from "../about/about";
    import Home from "../home/home";
    
	import {
	  Routes,
	  Route,
	  Link
	} from "react-router-dom";

		export function Main() {
		  return (
		  	<>
		        <Routes>
		          <Route exact path="/" element={<Home/>}/>
		          <Route exact path="authform" element={<AuthForm/>}/>
		          <Route exact path="managelanguages" element={<Managelanguages/>}/>
		          <Route exact path="about" element={<About/>}/>
		        </Routes>
		   </>
		  );
		}
