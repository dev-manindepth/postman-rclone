import { TextareaAutosize, Typography } from '@mui/material'
import React from 'react'

const textAreaStyle = {
  width: "100%",
  padding: "10px",
  background: `url(http://i.imgur.com/2cOaJ.png)`,
  backgroundAttachment: "local",
  backgroundRepeat: "no-repeat",
  paddingLeft: '35px',
  paddingTop: '10px',
  borderColor: "#ccc",
};
const CreateJsonText = () => {
  return (
    <>
        <Typography>JSON</Typography>
        <TextareaAutosize minRows={3} maxRows={5} style={textAreaStyle} />
    </>
  )
}

export default CreateJsonText