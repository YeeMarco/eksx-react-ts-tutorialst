export const  ProjectSearchPanel = (props)=>{

    // let {onwer, project} = props.info
    let {changeOnwer, changeProject} = props.action
  
    return (
        <>
            <div>ProjectSearchPanel</div>
            <input type="text" onInput ={changeProject}/>
            <select name="" id=""  onChange={changeOnwer}>
            
                <option value ="0">eks1</option>
                <option value="1">eks2</option>
                <option value="2">eks3</option>
            </select>
        </>
    )
}