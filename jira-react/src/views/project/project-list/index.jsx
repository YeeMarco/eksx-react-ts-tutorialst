export const  ProjectList = (props)=>{
    console.log(props)
    let {project_list} = props
    return (
        <>
            <div>ProjectList</div>
            {project_list.map((project)=>{
                return (
                    <div className="flex flex-row" key={project.id}>
                      {  
                        Object.keys(project).map((key)=>{
                            return (
                                <span key={key}>{project[key]}</span>
                            )
                        })
                        }
                        
                    </div>
                )
            })}
        </>
    )
}
