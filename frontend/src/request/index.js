import { store } from "../index";
import CLIENTS_LIST from '../types/clients'


export default function getClients() {
    fetch('http://localhost:3001/')
        .then(response => {
            return response.json()
        })
        .then(data => {
            store.dispatch({
                type: CLIENTS_LIST,
                clients: data.map((el, i) => {
                    return ({...el, id: i })
                })
            })
        })
        .catch(error => console.log(error));
}