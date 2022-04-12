let initialState={};

const setUserCread=(state=initialState,{type,payLoad})=>{
    switch(type){
        case "UserCread":
            state=payLoad;
            return state;
        default:
            return state;    
    }
}

export default setUserCread;