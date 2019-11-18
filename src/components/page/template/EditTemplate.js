import React from 'react';
import './EditTemplate.scss'
const TmpDiv = ({children}) => <div>{children}</div>
const EditTemplate = (props) => {
    const { contents : {header, body, buttonSubmit, buttonCancel}} = props
    return (
        <div className="EditTemplate">
            {header}
            <div className="area_body">{body}</div>
            <div className="area_button">
                {buttonSubmit}{buttonCancel}
            </div>            
        </div>
    );
};


EditTemplate.defaultProps = {
    header : <TmpDiv> 제목</TmpDiv>,
    body : <TmpDiv> 내용</TmpDiv>,
    buttonSubmit : <TmpDiv> 버튼 - 등록</TmpDiv>,
    buttonCancel : <TmpDiv> 버튼 - 취소</TmpDiv>,
}
export default EditTemplate;