import React from 'react';
import EditTemplate from './template/EditTemplate';
import SimpleButton from '../atoms/SimpleButton/SimpleButton';
import EditWebPost from '../organisms/EditWebPost/EditWebPost';



const editInputTitle = {
    id: "titleInp",
    name: "inputTitle",
    placeholder: "title",
    value: ""
}
const editInputDesc = {
    id: "descInp",
    name: "inputDesc",
    placeholder: "description...",
    value: ""
}

const EditPage = () => {

    const [editCtx, editSetCtx] = React.useState({
        inputTitle : {...editInputTitle},
        inputDesc : {...editInputDesc}
    })

    const onEditChange = (e)=>{
        let name = e.target.name;
        console.log(name,'name')
        let value = e.target.value;
        editSetCtx(ctx => {
            console.log(ctx)
            ctx[name].value = value
            return {
                ...ctx,
              
            }
        }
        )
    }

    const buttonSubmit = {
        text: 'submit'
    }
    const buttonCancel = {
        text: 'cancel'
    }
    const onEditSubmitButton = () => {
        console.log('submit')
    }
    const onEditCancelButton = () => {
        console.log('cancel')
    }
    const editContents = {
        header : <h3>Edit.</h3>,
        body : <EditWebPost editpost={editCtx} onChange={onEditChange}></EditWebPost>,
        buttonSubmit : <SimpleButton {...buttonSubmit} onClick={onEditSubmitButton}/>,
        buttonCancel : <SimpleButton {...buttonCancel} onClick={onEditCancelButton}/>,
    }
    return (
        <>
          <EditTemplate contents={editContents}/>  
        </>
    );
};



export default EditPage;