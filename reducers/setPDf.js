let initialState=[];

const setPDF=(state=initialState,{type,payLoad})=>{
    
    switch(type){
        case "PDF":
            state=[...payLoad];
            return state;
        default:
            return state;    
    }
}

export default setPDF;