'use client'


import { Input } from '@nextui-org/react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'

export default function Page() {

    const router = useRouter();
    const [error, setError] = useState(false);
    const {data: session, status} = useSession();

    const [signInForm, setSignInForm] = useState({
      email: "",
      password: "",
    })

    const handleChange = (e) => {
      setSignInForm({
        ...signInForm,
        [e.target.name] : e.target.value
      })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await signIn('credentials', {
          ...signInForm,
          redirect: false,
        });

        if(!error.ok){
          setError(true);
        }
    }

    //redirect to company page
    useEffect(() => {
      if (session) {
        router.push(`/company/dashboard`);
      }
    }, [session, router])

    
  return (
    <>
        <div className="flex min-h-full min-w-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-xl font-bold leading-9 tracking-tight text-gray-500">
            Company Sign In
          </h2>
          {error && <div className='bg-red-200 rounded-lg p-2 text-center'><p className='text-red-500'>Invalid email or password. </p></div>  }
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={(e) => handleSubmit(e)}>
            <div>
              <Input type="email" variant="underlined" label="Your Email" isRequired name="email" placeholder="email@example.com" onChange={(e) => handleChange(e)}></Input>
              </div>
            <div>
              <div className="flex items-center justify-between">
              <Input type="password" variant="underlined" label="Password" isRequired name="password" onChange={(e) => handleChange(e)}></Input>
              </div>
            </div>
            <div> 
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-remotify-db px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-remotify-db focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
          
        </div>
        <div className='flex flex-col gap-y-1 text-sm justify-center items-center mt-2'>
          <div className='flex flex-row text-sm justify-center mt-2 gap-3'>
            <p>Not a member?</p> <Link href={'/register'} className='text-remotify-db hover:underline'>Register</Link>
          </div>
            <Link href={'/forgot-password'} className='text-remotify-db hover:underline'>I forgot my password</Link> 
        </div>
      </div>
    </>
  )
}
