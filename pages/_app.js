import '../styles/global.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps}) {
    const router = useRouter()
    useEffect(() => {
        const { pathname } = router
        if (pathname === '/') {
          router.push('/en')
        }
    }, [router])
    return <Component {...pageProps} />
}
