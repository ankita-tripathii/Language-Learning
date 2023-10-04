import React from "react";
import Stack from 'react-bootstrap/Stack';
import Navbarexample from "../navbar/navbar";
import FirstCarousel from "../carousel/carousel";
import Languagelist from "../languagelist/languagelist";
import Details from "../whychooseus/detail";
import FooterExample from "../footer/footer";

export default function Home() {
  return (
    <>
      <Stack gap={5}>
         <Navbarexample />
         <FirstCarousel />
         <Languagelist />
         <Details/>
         <FooterExample />
      </Stack>
    </>
  )
}
