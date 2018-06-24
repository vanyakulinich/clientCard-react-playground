import SEARCH_VALUE from '../types/search'
export default function search(val) {
    return {
        type: SEARCH_VALUE,
        value: val
    }
}