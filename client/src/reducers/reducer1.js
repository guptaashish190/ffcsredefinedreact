const initialState = {
    test: "test"
};

export default function(state = initialState,action){
    switch(action.type){
        case "CHANGE_TEST":
            return Object.assign({},state,{test: action.payload});
            break;
        default : 
            return state;
            break;
    }
}