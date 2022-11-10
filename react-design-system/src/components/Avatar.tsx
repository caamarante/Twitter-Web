import { clsx } from 'clsx';
import imageFile from '../assets/Profile_Picture.png'

export interface AvatarProps {
    size?: 'md' | 'sm';
}

const image = {
    src: imageFile,
    alt: 'Avatar de perfil',
  };

export function Avatar({size = 'md' }: AvatarProps) {
    
    return(
        <img src={image.src} alt={image.alt}  className={clsx(
            'rounded-full',
            {
                'w-10 h-10': size === 'sm',
                'w-12 h-12': size === 'md',
            }
            )} />
    )
}