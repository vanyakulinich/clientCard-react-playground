import CLIENTS_LIST from '../types/clients'
export default function clientsBase(clients) {
    return {
        type: CLIENTS_LIST,
        clients: clients
    }
}