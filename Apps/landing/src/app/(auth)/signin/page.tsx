
import { LockClosedIcon } from '@heroicons/react/20/solid'
import './style.css';

export default function SignIn() {

    return (
        <>

            <div className="flex items-center justify-center h-screen">
                <div className=" max-w-295 space-y-2">
                    <div>

                        <h2 className="mt-6 text-32 text-center text-3xl font-bold tracking-tight text-gray-900">
                            Sign in to your account
                        </h2>
                        <p className="mt-2  text-sm text-gray-600">

                            <a href="#" className="font-medium text-13 text-indigo-600 hover:text-indigo-500">
                                Continue with a third-party
                            </a>
                        </p>
                        <button
                            type="submit"
                            className="group relative mt-2.5 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">

                            </span>
                            Github
                        </button>
                        <hr className="border-t-2 border-gray-300 my-6" />

                        <a href="#" className="font-medium text-13 text-indigo-600 hover:text-indigo-500">
                            Or enter your email address
                        </a>
                    </div>

                    <form className="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="relative block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Your email"

                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">


                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">

                                </span>
                                Continue
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}