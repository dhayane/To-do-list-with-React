import React from "react";
import PropTypes from "prop-types";
import './Tasks.css'

import { FaEdit, FaWindowClose } from 'react-icons/fa';

export default function Tasks({ tasks, handleEdit, handleDelete }) {
  return(
    <ul className="tasks">
        {tasks.map((task, index) => (
          <li key={task}>
            {task}
              <span>
                <FaEdit onClick={(e) => handleEdit(e, index)} className="edit" ></FaEdit>
                <FaWindowClose onClick={(e) => handleDelete(e, index)} className="delete"></FaWindowClose>
              </span>
          </li>
        ))}
    </ul>
  )
}

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete:PropTypes.func.isRequired,
}
