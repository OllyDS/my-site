import { stylesheet } from 'typestyle';

const style = stylesheet({
    introWrapper: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
    },
    intro: {
        // color: whitesmoke;
        fontFamily: 'Rubik',
        fontSize: 30,
        fontWeight: 700,
    },
});

export { style };
