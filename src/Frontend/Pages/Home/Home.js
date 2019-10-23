import React from 'react';
import Banner from './Components/Banner';
import Calender from './Components/Calender';
import Remaining from './Components/Remaining';


function App() {
  var BASE_URL = "#"
  
  return (
    <div>
      <Banner />
      <Calender />
      <Remaining />
    </div>
  );
}

export default App;
