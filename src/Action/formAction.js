//Action
export const SAVEDATA = "SAVE_DATA";

//Action Creators
export const savedata = (data) => ({ 
    type: SAVEDATA,
    payload: data
})