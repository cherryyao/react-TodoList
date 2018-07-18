import React, {Component} from 'react';
import './App.css';
import AddForm from './Component/AddForm';
import ToshowForm from './Component/ToshowForm';
import FilterForm from './Component/FilterForm';

class App extends Component {

  render() {
    return (
      <div class="container">

        <div>
          <h2>Jquery To Do List</h2>
          <p>
            <em>Simple Todo List with adding and filter by diff status.</em>
          </p>
        </div>

        <AddForm/>
        <br/>
        <ToshowForm/>

        <FilterForm/>

      </div>

    );
  }
}

export default App;
