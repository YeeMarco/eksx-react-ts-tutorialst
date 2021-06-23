declare interface ISearchPanelProps {
  info: {
    owner: any;
    project: any;
  };
  action: any;
}
export const ProjectSearchPanel = (props: ISearchPanelProps) => {
  // let {onwer, project} = props.info
  let { changeOwner, changeProject } = props.action;

  return (
    <>
      <div>ProjectSearchPanel</div>
      <input type="text" onInput={changeProject} />
      <select name="" id="" onChange={changeOwner}>
        <option value="">eks</option>
        <option value="1">eks1</option>
        <option value="1">eks1</option>
        <option value="2">eks2</option>
        <option value="3">eks3</option>
      </select>
    </>
  );
};
