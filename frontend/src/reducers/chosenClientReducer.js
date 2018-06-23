import CHOSEN_CLIENT from '../types/chosen';

export default function chosenClientReducer(state = {}, { type, chosen }) {
    switch (type) {
        case CHOSEN_CLIENT:
            return chosen;
        default:
            return state;
    }
}