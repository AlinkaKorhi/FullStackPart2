import React, { createElement } from 'react';

import coursesData from '../Data/coursesData.js';
import CourseScope from '../Components/CourseScope.js'

const App = () => {
  let courses = coursesData.map((elem, i) => (
    <CourseScope course={elem} key={elem.name+i}/>
  ));

  let divContent = createElement('div', null, courses);  
  
  return (
    <div>
      <h1>Web development: course information</h1>   
      {divContent}
    </div>
  )
}

export default App;