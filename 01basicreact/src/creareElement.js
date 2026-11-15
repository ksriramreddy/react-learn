import React from "react"

const reactEle = (
    <a href="https:google.com" target="_blank">click to open</a>
)
const reactEle1 = React.createElement(
    'a',
    {href:"http://youtube.com",target:"_blank"},
    "click top open youtube",
)
function CreateApp(){
    return(
        reactEle1
    )
}
export default CreateApp