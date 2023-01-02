import { createSlice } from '@reduxjs/toolkit';

export const reducerCustom = createSlice({

  name: 'searchresult',

  initialState: {
    value      : 0,  
    searchstr  : 0,  
    resultData : [],
    responseTimeMS: 0,
    isResultAvailable: false
  },//++initialState end

  reducers: {
    setSearchStr: ( state,action ) => {
      //alert(action.payload);
      //alert(action.type);
      state.searchstr = action.payload;
    },  
    checkReducer: ( state ) => {
        //alert(state.isResultAvailable);
        state.value += 1
    },  
    getSearchResultReducer: async (state, action) => {
        //alert( action.payload );
        //alert(state.searchstr);
        state.resultData = action.payload;
        console.log( JSON.stringify(state.resultData) );
    },
  },//++reducers end

})//export const reducerCustom end

//++Action creators are generated for each case reducer function
export const { getSearchResultReducer,checkReducer,setSearchStr } = reducerCustom.actions;
export default reducerCustom.reducer;