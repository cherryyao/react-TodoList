import React from 'react';
import { Component } from 'react';

export default class AddForm extends Component{

    render(){
        return(
            <div>
            <input class="input-text" type="text" name="ListItem" />
             <div id="button" onclick="addItem()">Add</div>
          </div>

        );
    }
};