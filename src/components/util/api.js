export const fetchCustomPOST = (option,body) => {
    const reqOption = {...option , body ,mode: 'cors', headers : {'Content-Type': 'application/json'}}    
    return fetchCommon(reqOption)
}
export const fetchCommon = async ( option )=> {
    const {url , ...rest} = option 
    const res = await window.fetch(url,{...rest})
    const data = await res.json();
    return data
}