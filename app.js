// let cells = document.querySelectorAll('.cell');
// let button = document.querySelector('.btn');
// let playerOne = 'X';

// let playerTwo = 'O';

// cells.forEach(cell => {
//     cell.addEventListener('click', () => {
//         if (cell.textContent === 'X' || cell.textContent === 'O') {
//             return;
//         }

//         cell.textContent = playerOne;

//         playerOne = playerOne === 'X' ? 'O' : 'X';
//     });
// });

// function resetCell() {
//     cells.forEach((cell => {
//         cell.textContent = '';
//     }));
// };

// button.addEventListener('click', resetCell);




let cells = document.querySelectorAll('.cell');
let button = document.querySelector('.btn');
let turn = 1;


cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if(!cell.textContent){
            if(turn % 2){
                cell.textContent = 'X';
            }else {
                cell.textContent = 'O';
            }
            turn++;
        }
    });
});

function resetCell() {
    cells.forEach((cell => {
        cell.textContent = '';
    }));
};

button.addEventListener('click', resetCell);




