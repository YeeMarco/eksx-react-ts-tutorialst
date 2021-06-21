export const ProjectList = (props) => {
    console.log(props)
    let { project_list } = props
    return (
        <>
            <div>ProjectList</div>
            <table className="table-auto border-separate border border-green-800">
                <thead>
                    <tr >
                        {
                            Object.keys(project_list[0]).map((key) => {
                                return (
                                    <th className="border border-green-600" key={key}>{key}</th>
                                )
                            })
                        }
                    </tr>


                </thead>

                <tbody>
                    {project_list.map((project) => {
                        return (
                            <tr key={project.id}>
                                {
                                    Object.keys(project).map((key) => {
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
