import { store } from "../index";
import CLIENTS_LIST from '../types/clients'

const url = 'http://localhost:3001/'

export default function getClients() {
    fetch(url)
        .then(response => {
            return response.json()
        })
        .then(data => {
            store.dispatch({
                type: CLIENTS_LIST,
                clients: data.map((el, i) => {
                    return Object.assign({},
                        el.general,
                        el.job,
                        el.contact,
                        el.address, { id: i }
                    )
                })
            })
        })
        .catch(error => console.log(error));
}