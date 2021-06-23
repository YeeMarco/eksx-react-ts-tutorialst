import React, { useEffect, useState } from "react";
import * as qs from "qs"

import { ProjectList } from "./project-list";
import { ProjectSearchPanel } from "./search-panel";

import { useDebounce, useDebounce1 } from "../../utils/hooks/useDebounce";

export interface IProject {
  owner: string;
  project_name:string;
  [key: string]: string | number;
}

let list_source: IProject[] = [
  {
    id: 0,
    project_name: "Jira",
    owner: "eks1",
    creactTime: "2021-06-21",
    info: "React Ts nestjs | Jira",
  },{
    id: 1,
    project_name: "Blog",
    owner: "eks2",
    creactTime: "2021-07-21",
    info: "Vue Ts json-server | Blog",
  },{
    id: 2,
    project_name: "Visualization",
    owner: "eks3",
    creactTime: "2021-08-21",
    info: "Three.JS canvas D3 | Visualization",
  },{
    id: 3,
    project_name: "Resume",
    owner: "eks2",
    creactTime: "2021-06-25",
    info: "Resume",
  },{
    id: 4,
    project_name: "Tutorialst",
    owner: "eks3",
    creactTime: "2021-06-25",
    info: "Vue Docs",
  },{
    id: 5,
    project_name: "SSR",
    owner: "eks2",
    creactTime: "2021-09-25",
    info: "Vue React SSR SGR",
  },
];
let list: IProject[] = list_source;
export const Project = () => {
  let [owner, setowner] = useState<string>("");
  let [project, setProject] = useState<string>("");
  let [projectList, setProjectList] = useState<IProject[]>(list);

  // step1 implement
  // useEffect(()=>{
  //   console.log('useEffect');
  //   let timer = setTimeout(()=>{
  //     console.log('effect');
  //   },1000)
  //   return ()=>{
  //     clearTimeout(timer)
  //     console.log('cancel effect');
  //   }
  // },[project])

  // step2 abstract
  // useDebounce(function effect(){
  //   console.log('project_name effect',project);
  //   list = list_source
  //   list = list.filter(item=>{
  //     return item.project_name.indexOf(project) !== -1
  //   })
  //   setProjectList(list)
  // },[project])
  useDebounce1(() => {
    console.log("owner effect", owner);
    console.log(qs.stringify({name:'name'}));
    
    list = list_source;
    list = list.filter((item) => {
      return item.owner.indexOf(owner) !== -1;
    });
    setProjectList(list);
  }, [owner]);

  let debouncedParm = useDebounce(project, 2000);
  useEffect(() => {
    console.log("project_name effect", debouncedParm);
    list = list_source;
    list = list.filter((item) => {
      return item.project_name.indexOf(debouncedParm) !== -1;
    });
    setProjectList(list);
  }, [debouncedParm]);

  function changeOwner(e: any) {
    console.log("changeowner");
    let val = e.target.value ;
    // list = list_source
    // list = list.filter(item=>{
    //   return item.owner === 'eks'+val
    // })
    // setProjectList(list)
    setowner(val);
  }
  function changeProject(e: any) {
    let val = e.target.value;
    // list = list_source
    // list = list.filter(item=>{
    //   return item.project_name.indexOf(val) !== -1
    // })
    // setProjectList(list)
    setProject(val);
  }
  return (
    <React.Fragment>
      <ProjectSearchPanel
        info={{ owner, project }}
        action={{ changeOwner, changeProject }}
      />
      <ProjectList project_list={projectList} />
    </React.Fragment>
  );
};
