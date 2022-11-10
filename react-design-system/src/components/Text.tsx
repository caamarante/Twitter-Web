import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface TextProps {
    size?: '13px' | '14px' | '15px' | '16px';
    children: ReactNode;
    asChild?: boolean;
    weight?: '500' | '700';
    className?: string;
}

export function Text({ size = '13px', weight = '500', children, asChild, className = 'text-black'}: TextProps) {
    const Comp = asChild ? Slot : 'p';
    
    return(
        <Comp 
            className={clsx(   
                `font-sans ${className}`, 
                {
                    'text-xs': size === '13px',
                    'text-sm': size === '14px',
                    'text-md': size === '15px',
                    'text-lg': size === '16px',
                    'font-medium': weight === '500',
                    'font-bold': weight === '700',
                }
                )}
        >
            {children}
        </Comp>
    )
}