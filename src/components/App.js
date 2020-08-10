import React from 'react';
import './../index.css';

import Header from './header';
import Experience from './experience';
import Education from './education';
import Skills from './skills';
import Projects from './projects';

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <Header />
        <Experience />
        <Education />
        <Skills />
        <Projects />
      </div>
    );
  }
}

export default App;
