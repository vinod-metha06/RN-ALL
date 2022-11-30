
export const initailState={
    loading:true,
    data:[],
    error:'',
    search:[]
    
}
export const AirReducer=(state=initailState,action:any)=>{
        switch (action.type) {
            case "FETCH":
                return{
                    ...state,
                    loading:false,
                    data:action.payload
                }
            case "FETCH_ERROR":
                    return{
                        ...state,
                        error:action.payload,
                        loading:false,
                        data:[]
                    }   
            case "SEARCH":
                
                return{
                         ...state,
                         loading:false,
                         search:action.payload
                        }  
        
            default:
                state;
        }
}