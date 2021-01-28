import { SAVEDATA } from '../Action/formAction'

// State initialValue
const initialState = {
    Name: '',
    Address: "",
    City: '',
    Phone: '',
    Country: '',
    States: '',
    PinCode: '',
}

//Reducer
const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVEDATA:
            return {
                ...state,
                Name: action.payload.Name,
                Address: action.payload.Address,
                City: action.payload.City,
                Phone: action.payload.Phone,
                Country: action.payload.Country,
                States: action.payload.States,
                PinCode: action.payload.PinCode
            };
        default:
            return state;
    }
}

export const getFormState = (state) => state || {}
export default formReducer;