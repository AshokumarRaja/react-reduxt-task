import { SAVEDATA } from '../Action/formAction'
const initialState = {
    Name: '',
    Address: "",
    City: '',
    Phone: '',
    Country: '',
    States: '',
    PinCode: '',
}
const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVEDATA:
            return {
                ...state,                       
                Name: action.payload.Name,
                Address: action.payload.Address,
                City: action.payload.City,
                PinCode: action.payload.PinCode,
                Phone: action.payload.Phone,
                Country: action.payload.Country,
                States: action.payload.States,

            }
        default:
            return state;
    }
}
export default formReducer;