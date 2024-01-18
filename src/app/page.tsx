import Image from 'next/image'
import Hero from './hero'

import AuthForm from './auth-form'


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Hero />
      <div className="row">
      <div className="col-6">
        <h1 className="header">Supabase Auth + Storage</h1>
        <p>
          Experience our Auth and Storage through a simple profile management example. Create a user
          profile and upload an avatar image. Fast, simple, secure.
        </p>
      </div>
      <div className="col-6 auth-widget">
        <AuthForm />
      </div>
    </div>
    </main>
  )
}
