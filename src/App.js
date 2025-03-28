import logo from './logo.svg';
import './App.css';
import React from 'react';
import LessonCard from './components/LessonCard';
import axios from 'axios';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      lessons: []
    };
  }

  componentDidMount() {
    this.getLessons();
  }

  render() {
    return (
      <div className="content-container">
        <div className="main-content">
          <h1 className="header-text">
            Welcome back to &lt;HTML/&gt;
          </h1>
          <div className="sub-heading-container">
            <p>
              <span className="sub-heading">
                Let's brush up our html, js and css knowledge
              </span>
            </p>
          </div>
          <div style={{ display: 'flex' }}>
            {
              this.state.lessons
                .map(le => <LessonCard name={le.text} id={le.value}
                  description={le.title}
                  key={le.text} />)
            }
          </div>
        </div>

      </div>
    );
  }

  getLessons() {
    axios.get('https://www.sfu.ca/bin/wcm/course-outlines?2015/summer/cmpt/120')
      .then(({ data: lessons }) => {
        console.log('res: ', lessons);
        this.setState({...this.state, lessons})
      })
      .catch(err => console.error('api error: ', err));

      // {
      //   //state,
      //   lessons: [
      //     {}, {}
      //   ]
      // }

    // return [{
    //   name: 'lesson1',
    //   description: 'Fundamentals of React'
    // },
    // {
    //   name: 'lesson2',
    //   description: 'More than Fundamentals of React'
    // },
    // {
    //   name: 'lesson3',
    //   description: 'Not Fundamentals anymore'
    // },
    // {
    //   name: 'lesson4',
    //   description: 'The one before the last one'
    // },
    // {
    //   name: 'lesson5',
    //   description: 'The last one'
    // }
    // ]
  }
}

export default App;