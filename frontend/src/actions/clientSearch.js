export const SEARCH_CLIENT = 'SEARCH_CLIENT'
export function searchClient(newClient) {
    return {
        type: SEARCH_CLIENT,
        clients: newClient
    }
}