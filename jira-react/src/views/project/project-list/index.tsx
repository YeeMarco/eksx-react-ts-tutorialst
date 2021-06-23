import {IProject} from '../index'
declare interface IProjectListProps {
  project_list: IProject[]
}

export const ProjectList:React.FC<IProjectListProps>= (props) => {
  let { project_list } = props;
  let header!:React.ReactElement[];
  let body!:React.ReactElement[];
  if (project_list.length > 0) {
    header = Object.keys(project_list[0]).map((key) => {
      return (
        <th key={key}>
          {key}
        </th>
      );
    });
    body = project_list.map((project) => {
      return (
        <tr key={project.id}>
          {Object.keys(project).map((key:string) => {
            return <td key={key}>{project[key]}</td>;
          })}
        </tr>
      );
    });
  } else {
  }
  return (
    <>
      <div>ProjectList</div>
      <table className="table-auto border-separate border border-green-800">
        <thead>
          <tr>{header}</tr>
        </thead>

        <tbody>{body}</tbody>
      </table>
    </>
  );
};
