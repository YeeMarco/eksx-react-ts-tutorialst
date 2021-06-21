import  React, { useState }  from "react";

import { ProjectList } from "./project-list";
import { ProjectSearchPanel } from "./search-panel";

let list = [
    {id:0,project_name:'Jira',onwer:'eks',creactTime:'2021-06-21',info:'React Ts nestjs | Jira'},
    {id:1,project_name:'Blog',onwer:'eks',creactTime:'2021-07-21',info:'Vue Ts json-server | Blog'},
    {id:2,project_name:'Visualization',onwer:'eks',creactTime:'2021-08-21',info:'Three.JS canvas D3 | Visualization'},
]
export const Project = (props) => {
let [onwer , setOnwer] = useState('')
let [project , setProject] = useState('')
function changeOnwer(val){
    setOnwer(val)
}
function changeProject(val){
    setProject(val)
}
  return (
    <React.Fragment>
        <ProjectSearchPanel  info={{onwer, project}} action={{changeOnwer,changeProject}}/>
      <ProjectList project_list={list} />
      
    </React.Fragment>
  );
};
