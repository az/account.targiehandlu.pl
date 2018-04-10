
import React from 'react'

import {
  List,
} from 'admin-on-rest'

import {Cards} from '../../iterators/Cards'



const TaskList = ({location, basePath}) => {

  return (

  <List resource="tasks" perPage={100} hasCreate={false} location={location} basePath={basePath}>

    <Cards>


    </Cards>

  </List>)

}


export default TaskList
