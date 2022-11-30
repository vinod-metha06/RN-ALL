export const initailState={
    loading:true,
    data:[],
    error:''
}

export const EarthQuakeReducer=(state=initailState,action:any)=>{
    switch (action.type) {
        case "FETCH":
            return{
                ...state,
                data:action.payload,
                loading:false,
            }
        case "FETCH_ERROR":
                return{
                    ...state,
                    data:[],
                    loading:false,
                }
            
            
    
        default:
            state;
    }
} 