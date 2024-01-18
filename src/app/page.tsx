import Hero from './components/hero'
import Header from './components/header'


export default function Home() {
  return (
    <>
    <Header />
    <main className="flex flex-col items-center justify-between p-24">
      <Hero />
    </main>
    </>
  )
}
