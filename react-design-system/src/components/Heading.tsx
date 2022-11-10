import { ReactNode } from 'react';
import { clsx } from 'clsx';

export interface HeadingProps {
    size?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    children: ReactNode;
    asChild?: boolean;
    className?: string;
}

export function Heading({ size = 'h2', children, className}: HeadingProps) {
    const Comp = size;
    
    return(
        <Comp 
            className={clsx(   
                `font-sans font-bold ${className}`, 
                {
                    'text-2xl': size === 'h2',
                    'text-xl': size === 'h3',
                    'text-lg': size === 'h4',
                    'text-md': size === 'h5',
                    'text-sm': size === 'h6',
                }
                )}
        >
            {children}
        </Comp>
        
    )
}