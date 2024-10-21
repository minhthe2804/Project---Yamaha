import { useRef, useState, useId, type ElementType } from 'react'
import { FloatingPortal, arrow, offset, shift, useFloating, type Placement } from '@floating-ui/react-dom-interactions'
import { motion, AnimatePresence } from 'framer-motion'

interface Props {
    children: React.ReactNode
    renderPopover: React.ReactNode
    className?: string
    as?: ElementType
    initialOpen?: boolean
    placement?: Placement
    blogTop?: number
    blogRight?: number
    arrowRight?: number
    arrowTop?: number
    transformOrigin?: string
}

export default function Popover({
    children,
    className,
    renderPopover,
    as: Element = 'div',
    initialOpen,
    placement = 'bottom-end',
    blogTop,
    blogRight,
    arrowRight,
    arrowTop,
    transformOrigin
}: Props) {
    const [open, setOpen] = useState(initialOpen || false)
    const arrowRef = useRef<HTMLElement>(null)
    const id = useId()

    const { reference, floating, strategy } = useFloating({
        middleware: [offset(1), shift(), arrow({ element: arrowRef })],
        placement: placement
    })

    const showPopover = () => {
        setOpen(true)
    }

    const hidePopover = () => {
        setOpen(false)
    }

    return (
        <Element className={className} ref={reference} onMouseEnter={showPopover} onMouseLeave={hidePopover}>
            {children}
            <FloatingPortal id={id}>
                <AnimatePresence>
                    {open && (
                        <motion.div
                            ref={floating}
                            style={{
                                position: strategy,
                                top: blogTop,
                                right: blogRight,
                                width: 'max-content',
                                transformOrigin: `${transformOrigin}px top`
                            }}
                            initial={{ opacity: 0, transform: 'scale(0)' }}
                            animate={{ opacity: 1, transform: 'scale(1)' }}
                            exit={{ opacity: 0, transform: 'scale(0)' }}
                            transition={{ duration: 0.2 }}
                        >
                            <span
                                ref={arrowRef}
                                className='absolute z-10 translate-y-[-95%] transform border-[8px] border-x-transparent border-b-[#b80319] border-t-transparent '
                                style={{ right: arrowRight, top: arrowTop }}
                            ></span>
                            {renderPopover}
                        </motion.div>
                    )}
                </AnimatePresence>
            </FloatingPortal>
        </Element>
    )
}
