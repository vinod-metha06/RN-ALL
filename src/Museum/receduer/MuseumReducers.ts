export const initailState={
    loading:true,
    data:{},
    error:'',
    info:{}
}

export const MuseumReducer=(state=initailState,action:any)=>{
    switch (action.type) {
        case "FETCH":
            return{
                ...state,
                data:action.payload,
                loading:false,
            }
        case "FETCH_INFO":
                return{
                    ...state,
                    info:action.payload,
                    loading:false,
                }    
        case "FETCH_ERROR":
                return{
                    ...state,
                    data:{},
                    loading:false,
                }
            
            
    
        default:
            state;
    }
} 