import { CardFollow } from './components/CardFollow';
import { CardNews } from './components/CardNews';
import { Header } from './components/Header';
import { Post } from './components/Post';
import { SearchBar } from './components/SearchBar';
import { SideMenu } from './components/SideMenu';
import { Spacer } from './components/Spacer';
import { Text } from './components/Text';
import { Tweet } from './components/Tweet';
import './styles/global.css';
import clsx from 'clsx';
import style from './App.module.scss'

export function App() {
  return(
    <>
      <section className='flex justify-center'>
        <SideMenu mode='light' className={style.sideMenu}></SideMenu>
        <main className={clsx(`border-l border-r border-dark-700 ${style.feed}`)}>
          <Header mode='light'></Header>
          <Post mode='light'></Post>
          <Spacer mode='light'></Spacer>
          <Tweet mode='light'></Tweet>
          <Tweet mode='light'></Tweet>
        </main>
        <div className={style.rightMenu}>
          <SearchBar mode='light' className='mt-2.5'></SearchBar>
          <div>
            <CardNews mode='light' className='mt-4'></CardNews>
            <CardFollow mode='light' className='mt-4'></CardFollow>
          </div>
          <Text size='13px' className='text-dark-500'>Terms of Service Privacy Policy Cookie Policy Ads info More © 2021 Twitter, Inc.</Text>
        </div>
      </section>
    </>
  )
}