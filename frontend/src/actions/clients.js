import CLIENTS_LIST from '../types/clients';

const url = 'http://localhost:3001/';

export default function getClients() {
    return (dispatch)=> {
        fetch(url)
        .then(response=>response.json())
        .then(data=>{
            dispatch({
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
        .catch(e=>console.log(e))
    }
}
