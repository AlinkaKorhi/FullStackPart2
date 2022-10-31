import Header from '../Components/Header.js';
import Content from '../Components/Content.js';
import Total from '../Components/Total.js';

const CourseScope = (props) => {
    return(
        <div>
            <Header course={props.course.name}/>
            <Content parts={props.course.parts}/>
            <Total parts={props.course.parts}/>
        </div>
    );
};

export default CourseScope;