let app = new Vue({
    el: '#app',
    data: {
        display: '0',
        buttons: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'C', '%', '/', '*', '-', '+', '.', '=']
    },
    methods: {
        handleClick(button) {
            if (button === 'C') {
                this.display = '0';
            } else if (this.display === '' || this.display === '0') {
                this.display = button;
            } else if (button === '=') {
                this.display = eval(this.display);
            } else if (button === '%') {
                // Обработка подсчёта процентов
                this.display = eval(this.display) / 100;
            } else {
                this.display += button;
            }
        }
    }
});

  