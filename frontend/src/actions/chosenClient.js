import CHOSEN_CLIENT from '../types/chosen'

export default function chosenClient(chosenClient) {
    return {
        type: CHOSEN_CLIENT,
        chosen: chosenClient
    }
}