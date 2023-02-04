
class Action{
    constructor(name){
        this.name=name;
    }
    trigger({type=""}={}){
        return {type: type,payload:""};
    }
    set({type="",payload=""}={}){
       return {type: type,payload: payload};
    }
    reset({type=""}={}){
        return {type: type,payload: ""};
    }
};

export const FETCH_SEARCH_RESULT = new Action("FETCH_SEARCH_RESULT");