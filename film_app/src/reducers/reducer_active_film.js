export default function (state = null, action) {
    switch(action.type) {
        case 'SELECTED_FILM':
            return action.payload;
        default:
            return state
    }

}
