import styles from './navbar.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'

const Navbar = (props) => {
  const { username } = props
  const router = useRouter()
  const [showDropdown, setShowDropDown] = useState(false)

  const handleShowDropdown = (e) => {
    setShowDropDown(!showDropdown)
  }
  const handleOnClickHome = (e) => {
    e.preventDefault()
    router.push('/')
  }

  const handleOnClickMyList = (e) => {
    e.preventDefault()
    router.push('/browse/my-list')
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <a className={styles.logoLink} href='/'>
          <div className={styles.logoWrapper}>
            <Image
              src={'/static/netflix.svg'}
              alt='Netflix Logo'
              width={128}
              height={34}
            />
          </div>
        </a>

        <ul className={styles.navItems}>
          <li className={styles.navItem} onClick={handleOnClickHome}>
            Home
          </li>
          <li className={styles.navItem2} onClick={handleOnClickMyList}>
            My List
          </li>
        </ul>

        <nav className={styles.navContainer}>
          <div>
            <button className={styles.usernameBtn} onClick={handleShowDropdown}>
              <p className={styles.username}>{username}</p>
              <Image
                src={'/static/expand_more.svg'}
                alt='expand icon'
                width={24}
                height={24}
              />
            </button>

            {showDropdown && (
              <div className={styles.navDropDown}>
                <div>
                  <Link href='/login' legacyBehavior>
                    <a className={styles.linkName}>Sign Out</a>
                  </Link>
                  <div className={styles.lineWrapper}></div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
