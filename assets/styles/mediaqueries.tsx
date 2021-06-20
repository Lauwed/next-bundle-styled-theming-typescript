export const breakpoints = [
    600,
    768,
    992,
    1200,
    1440,
];

export const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);