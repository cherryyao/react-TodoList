import React from 'react';
import {Component} from 'react';

export default class FilterForm extends Component {

  render() {
    return (
      <div>
        <ul id="filters">
          <li>
            <a href="#" data-filter="all" class="selected">ALL</a>
          </li>
          <li>
            <a href="#" data-filter="active" class="">Active</a>
          </li>
          <li>
            <a href="#" data-filter="complete" class="">Complete</a>
          </li>
        </ul>
      </div>
    );
  }
};