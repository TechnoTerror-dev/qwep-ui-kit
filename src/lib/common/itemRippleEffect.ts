export const itemRippleEffect = (event: React.MouseEvent<HTMLElement>, color: string, duration: number = 800) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const circle = document.createElement('span');
    const diameter = Math.max(rect.width, rect.height);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - rect.left - radius}px`;
    circle.style.top = `${event.clientY - rect.top - radius}px`;

    circle.style.backgroundColor = color;
    circle.style.position = 'absolute';
    circle.style.borderRadius = '50%';
    circle.style.transform = 'scale(0)';
    circle.style.animation = `ripple ${duration}ms linear`;

    if ('adoptedStyleSheets' in document) {
        const styleSheet = new CSSStyleSheet();
        styleSheet.insertRule(`
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `);
        document.adoptedStyleSheets = [...document.adoptedStyleSheets, styleSheet];
    } else {
        //@ts-ignore
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        //@ts-ignore
        document.head.appendChild(style);
    }

    circle.classList.add('ripple');
    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) {
        ripple.remove();
    }
    button.appendChild(circle);
};
