import { clsx } from 'clsx';
import { Heading } from './Heading';
import { Text } from './Text';
import imageFile1 from '../assets/News1.jpg';
import imageFile2 from '../assets/News2.jpg';
import imageFile3 from '../assets/News3.png';
import style from './News.module.scss';

export interface NewsProps {
    mode?: 'light' | 'dark';
    titulo?: string;
    noticia?: string;
    hashtag?: string;
}
const image = {
    src1: imageFile1,
    src2: imageFile2,
    src3: imageFile3,
    alt: 'News',
  };

export function News({mode, titulo, noticia, hashtag}: NewsProps) {
    return (
        <div className={clsx('w-96 py-2.5 px-3.5 flex justify-between',{'bg-dark-300 border-b border-dark-400': mode === 'dark', 'bg-dark-800  border-b border-dark-700': mode === 'light'})}>
            <div className='grid gap-y-1.5 mr-4'>
                <Heading size='h6' className={clsx({
                        ' text-dark-500': mode === 'light',
                        ' text-dark-600 ': mode === 'dark',
                    })}>
                    {titulo}
                </Heading>
                <Text size='14px' weight='700' className={clsx('tracking-wide leading-5',{
                        ' text-black': mode === 'light',
                        ' text-white': mode === 'dark',
                    })}>
                    {noticia}
                </Text>
                <Heading size='h6' className={clsx({
                        ' text-dark-500': mode === 'light',
                        ' text-dark-600': mode === 'dark',
                    })}>
                    Trending with <span className='text-primary-blue'>{hashtag}</span>
                </Heading>
            </div>
            <img src={image.src1} alt={image.alt} className={clsx(`${style.imagemNews} rounded-xl`)}/>
        </div>
    )
}