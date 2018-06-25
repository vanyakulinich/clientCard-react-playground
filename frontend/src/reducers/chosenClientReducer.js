import CHOSEN_CLIENT from '../types/chosen';

export default function chosenClientReducer(state = null, { type, chosen }) {
    switch (type) {
        case CHOSEN_CLIENT:
            return chosen;
        default:
            return state;
    }
}