let initialState={};

const setClassDetails=(state=initialState,{type,payLoad})=>{
    switch(type){
        case "ClassDetail":
            state=payLoad;
            return state;
        default:
            return state;    
    }
}

export default setClassDetails;