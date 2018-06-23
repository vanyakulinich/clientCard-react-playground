export default function chosenClientreducer(state = {}, { type, update }) {
    switch (type) {
        case 'newChosenClient':
            return update;
        default:
            return state;
    }

}