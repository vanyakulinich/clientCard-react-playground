import CLIENTS_LIST from '../types/clients';

export default function clientsReducer(state = [], { type, clients }) {
    switch (type) {
        case CLIENTS_LIST:
            return clients;
        default:
            return state;
    }
}