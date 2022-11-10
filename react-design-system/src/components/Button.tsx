import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface ButtonProps {
    color?: 'primary' | 'secondary';
    size?: 'lg' | 'md' | 'sm';
    children: ReactNode;
    asChild?: boolean;
    className?: string;
}

export function Button({size = 'lg', color, children, asChild, className = 'w-56'}: ButtonProps) {
    const Comp = asChild ? Slot : 'button';
    
    return(
        <Comp 
            className={clsx(   
                `font-bold font-sans rounded-full text-md ${className}`,
                {
                    'py-3.5': size === 'lg',
                    'py-2.5': size === 'md',
                    'py-1.5': size === 'sm',
                    'bg-primary-blue text-white border-none hover:bg-dark-blue': color === 'primary',
                    'bg-transparent text-primary-blue border-solid border-2 border-sky-primary-blue hover:bg-primary-blue hover:text-white': color === 'secondary',
                } 
                )}
        >
            {children}
        </Comp>
    )
}