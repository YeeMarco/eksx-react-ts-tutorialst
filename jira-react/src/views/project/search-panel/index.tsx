import { Input, Select } from "antd";
const { Option } = Select;
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
      <h1 style={{ fontSize: "4rem" }}>ProjectSearchPanel</h1>
      <Input
        type="text"
        style={{ width: 240 }}
        placeholder="please input the project name"
        onChange={changeProject}
      />

      <Select defaultValue="" style={{ width: 120 }} onChange={changeOwner}>
        <Option value="">eks</Option>
        <Option value="1">eks1</Option>
        <Option value="2">eks2</Option>
        <Option value="3">eks3</Option>
      </Select>
    </>
  );
};
