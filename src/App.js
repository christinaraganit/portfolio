import './App.css';
import DivWithProgress from './components/DivWithProgress';
import Project from './components/Projects';
import Navigation from './components/Navigation';
import TitleHeader from './components/Header';

const proj1_details = ["works", "test"];
const proj1_stack = ["blah", "blah"];


function App() {
  return (
    <div className="App">
      <Navigation></Navigation>

      <TitleHeader></TitleHeader>

      <DivWithProgress 
        projects={
          [
            <Project 
              project_title="test"
              date="may 10, 2001"
              project_details={proj1_details}
              project_stack={proj1_stack}
            />,
            <Project 
              project_title="blah 1"
              date="may 15, 2001"
              project_details={proj1_details}
              project_stack={proj1_stack}
            />,
            <Project 
              project_title="blah 2"
              date="may 15, 2001"
              project_details={proj1_details}
              project_stack={proj1_stack}
            />,
            <Project 
              project_title="blah 3"
              date="may 15, 2001"
              project_details={proj1_details}
              project_stack={proj1_stack}
            />
          ]
        }
      />
    </div>
  );
}

export default App;