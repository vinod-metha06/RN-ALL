export const initailState={
    loading:true,
    data:[],
    error:''
}

export const reducer=(state=initailState,action:any)=>{
    switch (action.type) {
        case "FETCH":
            return{
                ...state,
                loading:false,
                data:action.payload
            }
            case "FETCH_ERROR":
                return{
                    
                    error:'error',
                    loading:true,
                    data:[]
                }
    
        default:
            state;
    }
}