import styles from './styles.module.scss'
import { SignInButton } from '../SignInButton'
// import Image from 'next/image'
import { ActiveLink } from '../ActiveLink'

export const Header = () => {

  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="dc.news logo" className="logo"/>
        
          <nav>

            <ActiveLink href="/" activeClassName={styles.active}>
              <a>Home</a>
            </ActiveLink>

            <ActiveLink href="/posts" activeClassName={styles.active}>
              <a>Posts</a>
            </ActiveLink>

          </nav>
          <SignInButton />

      </div>
    </header>
  )
}