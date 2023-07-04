import React from 'react';
import Trips from './components/Trips';

export const metadata = { // utilizado para dar um title a page
  title: "About",
};

const page = () => {
  return  <div><Trips/></div> ;
};

export default page