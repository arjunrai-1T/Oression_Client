import oressionState from "../states/State";

export default function oressionReducer(state=oressionState,action){
  switch(action.type){

    case 'TRIGGER_SEARCH_RESULT':
      return {...state,
              search_result: "",
              status:0,
              statusText:"",
              loading:true,
              isResultAvailable:false};

    case 'ADD_SEARCH_QUERY':
        return {...state,search_query: action.payload,};

    case 'SUCCESS_SEARCH_RESULT':
        return {...state,
              search_result: action.payload,
              status:action.payload.status,
              statusText:action.payload.statusText,
              loading:false,
              isResultAvailable:true};

    case 'ERROR_SEARCH_RESULT':
                return {...state,
                      search_result: action.payload,
                      status:action.payload.status,
                      statusText:action.payload.statusText,
                      loading:false,
                      isResultAvailable:false};

    case 'RESET_SEARCH_RESULT':
      return {...state,
        search_result:"",
        status:0,
        statusText:"",
        loading:false,
        isResultAvailable:false};
        
    default:
      return state;
  };
}

