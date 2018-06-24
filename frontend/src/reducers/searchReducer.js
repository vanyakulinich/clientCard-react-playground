import SEARCH_VALUE from '../types/search';

export default function searchReducer(state = '', { type, value }) {
    switch (type) {
        case SEARCH_VALUE:
            return value;
        default:
            return state;
    }
}