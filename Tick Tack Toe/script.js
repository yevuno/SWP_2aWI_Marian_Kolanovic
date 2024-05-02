let turn = 0;
let spaces = Array(9).fill(null);

function draw() {
    const board = document.querySelector('.board');
    board.innerHTML = '';
    spaces.forEach((space, i) => {
        const div = document.createElement('div');
        div.classList.add('space');
        div.id = i + 1;
        div.textContent = space;
        div.addEventListener('click', () => makeMove(i));
        board.appendChild(div);
    });
}

function makeMove(i) {
    if (spaces[i] === null) {
        spaces[i] = turn % 2 === 0 ? 'X' : 'O';
        turn++;
        draw();
        checkWin();
    }
}

function checkWin() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (spaces[a] && spaces[a] === spaces[b] && spaces[a] === spaces[c]) {
            setTimeout(() => {
                alert(spaces[a] + ' gewinnt!');
                resetGame();
            }, 100);
            return;
        }
    }

    if (!spaces.includes(null)) {
        setTimeout(() => {
            alert('Unentschieden!');
            resetGame();
        }, 100);
    }
}

function resetGame() {
    spaces = Array(9).fill(null);
    turn = 0;
    draw();
}

draw();