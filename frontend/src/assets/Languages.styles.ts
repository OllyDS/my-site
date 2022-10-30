import { stylesheet } from 'typestyle';

const style = stylesheet({
    wrapper: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        marginTop: -24
    },
    text: {
        fontFamily: 'Rubik',
        fontSize: 20,
        fontWeight: 700,
    },
    image: {
        padding: 8,
        width: 72
    }
});

export { style };
