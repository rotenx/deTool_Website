import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <>
    redirecting to main page...
    <Link href={"/dashboard"} passHref>click me</Link>
    </>
  )
}
