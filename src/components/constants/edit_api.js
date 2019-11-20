
const SEARCH_URL = "http://localhost:4444/search";

const postMakeReqUrlInOption = (option) => {
   return (url)=>{
        const targetUrl =  url ? SEARCH_URL + url  : SEARCH_URL;
        return {
        ...option,
        url : targetUrl
        }
   }
}

const WEBPOST_FETCH_OPTION_GET_BY_ID = {
    method : 'GET',
}
export const webpostGetOptionByid = (id) => {
    return postMakeReqUrlInOption(WEBPOST_FETCH_OPTION_GET_BY_ID)('/'+id)
}
const WEBPOST_FETCH_OPTION_DELETE_BY_ID = {
    method : 'DELETE',
}
export const webpostDeleteOptionByid = (id) => {
    return postMakeReqUrlInOption(WEBPOST_FETCH_OPTION_DELETE_BY_ID)('/'+id)
}

const WEBPOST_FETCH_OPTION_UPDATE_BY_ID = {
    method : 'PUT',
    body : {}
}
export const webpostPostModify = (id) => {
    return postMakeReqUrlInOption(WEBPOST_FETCH_OPTION_UPDATE_BY_ID)('/'+id)
}

const WEBPOST_FETCH_OPTION_CREATE = {
    method : 'POST',
    url : postMakeReqUrlInOption(),
    body : {}
}
export const webpostPostCreate = () => {
    return postMakeReqUrlInOption(WEBPOST_FETCH_OPTION_CREATE)()
}





