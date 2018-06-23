import { store } from "../index";
import { SEARCH_CLIENT } from '../actions/clientSearch'


export default async function getClients() {
    await fetch('http://localhost:3001/')
        .then(response => {
            return response.json()
        })
        .then(data => {
            store.dispatch({
                    type: SEARCH_CLIENT,
                    clients: data
                })
                // return data
        })
}