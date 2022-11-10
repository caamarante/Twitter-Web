import { clsx } from 'clsx';
import { Heading } from './Heading';
import { News } from './News';

export interface CardNewsProps {
    mode?: 'light' | 'dark';
    className?: string;
}

export function CardNews({mode, className}: CardNewsProps) {
    return (
        <div className={clsx(`w-96 py-2.5 rounded-2xl  ${className}`,{'bg-dark-300': mode === 'dark', 'bg-dark-800': mode === 'light'})}>
            <Heading size='h2'  className={clsx(`tracking-wide leading-5 h-9 px-3.5 flex items-center`,{
                    ' text-black  border-b border-dark-700': mode === 'light',
                    ' text-white  border-b border-dark-400': mode === 'dark',
                })}>
                What's happening
            </Heading>
            <News mode={mode} titulo='COVID19 · Last night' noticia="England's Chief Medical Officer says the UK is at the most dangerous time of the pandemic" hashtag='#covid19'></News>
            <News mode={mode} titulo='US news · 4h ago' noticia="Parler may go offline following suspensions by Amazon, Apple and Google" hashtag='#trump'></News>
            <News mode={mode} titulo='India · 1h ago' noticia="India vs Australia: India hold on to earn a draw on Day 5 in Sydney Test" hashtag='#sport'></News>
            <a href="" className='no-underline text-primary-blue flex items-center text-xs h-9  px-3.5'>Show more</a>
        </div>
    )
}