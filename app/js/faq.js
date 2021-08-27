document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.spoilers__content-list-item');

    accordions.forEach(el => {
        el.addEventListener('click', (e) => {
            const self = e.currentTarget;
            const control = self.querySelector('.spoilers__content-control');
            const content = self.querySelector('.spoilers__content-list-info');

            self.classList.toggle('open');

            // если открыт аккордеон
            if (self.classList.contains('open')) {
                control.setAttribute('aria-expanded', true);
                content.setAttribute('aria-hidden', false);
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                control.setAttribute('aria-expanded', false);
                content.setAttribute('aria-hidden', true);
                content.style.maxHeight = null;
            }
        });
    });

    const defaultSelect = () => {
        const element = document.querySelector('.faq-form__select');
        const choices = new Choices(element, {
            searchEnabled: false,
            itemSelectText: '',
        });
    };

    defaultSelect();
});
