import styles from './styles.module.scss'
import { SignInButton } from '../SignInButton'
import  Link  from 'next/link'
import { ActiveLink } from '../ActiveLink'

export const Header = () => {

  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="dc.news logo" />
        
          <nav>

            <ActiveLink href="/" activeClassName={styles.active}>
              <a>Home</a>
            </ActiveLink>

            <ActiveLink href="/posts" activeClassName={styles.active} prefetch>
              <a>Posts</a>
            </ActiveLink>

          </nav>
          <SignInButton />

      </div>
    </header>
  )
}