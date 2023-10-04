	import React from "react";
	import Stack from 'react-bootstrap/Stack';
	import Container from "react-bootstrap/Container";
	import Row from 'react-bootstrap/Row';
	import Col from 'react-bootstrap/Col';
	import Navbarexample from "../navbar/navbar";

	import  AuthForm from "../authform/authform";
	import Managelanguages from "../managelanguages/managelanguages";
	import About from "../about/about";

	import  FirstCarousel from "../carousel/carousel";
	import  Languagelist from "../languagelist/languagelist";
    import Details from "../whychooseus/detail";

	import FooterExample from "../footer/footer";
	import {
	  Routes,
	  Route,
	  Link
	} from "react-router-dom";

		export function Main() {
		  return (
		  	<>

		  	
		        <Routes>
		          <Route exact path="authform" element={<AuthForm/>}/>
		          <Route exact path="managelanguages" element={<Managelanguages/>}/>
		          <Route exact path="about" element={<About/>}/>
		        </Routes>
		     

		     <Stack gap={5}>
		       <Navbarexample/>
		       <FirstCarousel/>
		       <Languagelist/>
		       <Details/>
		       <FooterExample/> 
		     </Stack> 

		  	  
		   </>
		  );
		}
