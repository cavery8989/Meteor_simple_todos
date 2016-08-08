import React, { Component, PropTypes } from 'react';
import {Tasks} from '../api/tasks';
import { Metreor } from 'meteor/meteor';


export default  class Task extends Component {
  toggleChecked() {
    // set task checked property to the opposite of what i it was prior.

    Meteor.call('tasks.setChecked', this.props.task._id, !this.props.task.checked);
  }

    deleteThisTask(){
      Meteor.call('tasks.remove', this.props.task._id);
    }


  render () {

    // assign checked class to tasks that are selected.
    const taskClassName = this.props.task.checked ? 'checked' : '';
    return (
      <li className={taskClassName}>
        <button className="delete" onClick={this.deleteThisTask.bind(this)}>
          &times;
        </button>

        <input
          type="checkbox"
          readOnly
          checked={this.props.task.checked}
          onClick={this.toggleChecked.bind(this)}
        />
        <span className="text">
          <strong>{this.props.task.username}</strong>: {this.props.task.text}
          </span>
      </li>
    );
  }
}

Task.propTypes = {
  task: PropTypes.object.isRequired,
};
