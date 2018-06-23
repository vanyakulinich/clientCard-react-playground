import { SEARCH_CLIENT } from '../actions/clientSearch';


export default function clientsReducer(state = '[]', { type, clients }) {
    switch (type) {
        case SEARCH_CLIENT:
            return clients
        default:
            return state;
    }
}