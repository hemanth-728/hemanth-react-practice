import './Body1.css'
function Body1(props) {
    return (
        <>
        <div id="body-content">
         <table>
            <thead>
                <td>S.No</td>
                <td>University</td>
                <td>Class</td>
                <td>Percentage</td>
            </thead>
            {props.info.map((infoobj) => {
                return (
                    <tr>
                    <td>{infoobj.sno}</td>
                    <td>{infoobj.University}</td>
                    <td>{infoobj.Class}</td>
                    <td className='percent-val'>{infoobj.Percentage}</td>
                </tr>
                )
            })}
        </table>
        {props.children}
        </div>
        </>
    )

}

export default Body1;