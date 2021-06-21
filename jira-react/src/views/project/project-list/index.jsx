export const  ProjectList = (props)=>{
    console.log(props)
    let {project_list} = props
    return (
        <>
            <div>ProjectList</div>
            <table>
                <th></th>
                <tbody>
                {project_list.map((project)=>{
                return (
                    <tr  key={project.id}>
                      {  
                        Object.keys(project).map((key)=>{
                            return (
                                <td key={key}>{project[key]}</td>
                            )
                        })
                        }
                        
                    </tr>
                )
            })}
                </tbody>
            </table>
            
        </>
    )
}
