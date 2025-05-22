export default function Reducer(state, action) {

    switch (action.type) {
        case 'change_address':
            return {
                ...state,
                address: action.payload.address,
            }
        case 'increment_marks':
            return {
                ...state,
                marks: state.marks + 1
            }
        default:
            return { ...state }
    }
}