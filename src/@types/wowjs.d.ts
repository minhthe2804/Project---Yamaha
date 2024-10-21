declare module 'wow.js' {
    export default class WOW {
        constructor(options?: WOWOptions)
        init(): void
    }

    interface WOWOptions {
        boxClass?: string // class to be applied to box elements
        animateClass?: string // class to be applied to animated elements
        offset?: number // distance to the element when it becomes visible
        mobile?: boolean // enable/disable animations on mobile devices
        live?: boolean // enable/disable mutations observer
    }
}
