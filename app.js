const jsx = '<p>JSX</p>';
const longString =
    'flaksdf flaksdf flaksdf flaksdf flaksdf flaksdf flaksdf flaksdf flaksdf';

const obj = {
    name: 'vardas',
    surname: 'pavarde',
};
const promiseEg = new Promise((resolve, reject) => {
    resolve(
        'Sesios zasys su sesiais zasyciais, Sesios zasys su sesiais zasyciais'
    );
});

document.write(longString, obj, promiseEg, jsx);
