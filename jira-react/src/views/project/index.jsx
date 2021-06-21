import React, { useState } from "react";

import { ProjectList } from "./project-list";
import { ProjectSearchPanel } from "./search-panel";

let list_source = [
  { id: 0, project_name: 'Jira', onwer: 'eks1', creactTime: '2021-06-21', info: 'React Ts nestjs | Jira' },
  { id: 1, project_name: 'Blog', onwer: 'eks2', creactTime: '2021-07-21', info: 'Vue Ts json-server | Blog' },
  { id: 2, project_name: 'Visualization', onwer: 'eks3', creactTime: '2021-08-21', info: 'Three.JS canvas D3 | Visualization' },
]
let list = list_source
export const Project = (props) => {
  let [onwer, setOnwer] = useState('')
  let [project, setProject] = useState('')
  function changeOnwer(e) {
    console.log('changeOnwer',e.target.value);
    let val = e.target.value
    list = list_source
    list = list.find(item=>{
      return item.id == val
    })
    list = [list]
    console.log(list);
    setOnwer(val)
  }
  function changeProject(e) {
    console.log('changeOnwer',e.target.value);
    let val = e.target.value
    setProject(val)
  }
  return (
    <React.Fragment>
      <ProjectSearchPanel info={{ onwer, project }} action={{ changeOnwer, changeProject }} />
      <ProjectList project_list={list} />

    </React.Fragment>
  );
};
