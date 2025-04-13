(() => {
    const screen = document.querySelector('.Screen');
    const buttons = document.querySelectorAll('.btn');
    const clearBtn = document.querySelector('.btn-clear');
    const equalBtn = document.querySelector('.btn-equal');

    buttons.forEach(button => {
        button.addEventListener('click', e => {
            const value = e.target.dataset.num;
            if (value !== undefined) {
                screen.value += value;
            }
        });
    });

    equalBtn.addEventListener('click', () => {
        if (screen.value.trim() === '') {
            screen.value = "Please enter";
        } else {
            try {
                const result = eval(screen.value);
                screen.value = result;
            } catch (error) {
                screen.value = "Error";
            }
        }
    });

    clearBtn.addEventListener('click', () => {
        screen.value = "";
    });
})();
