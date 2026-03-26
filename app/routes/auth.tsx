import React, {useEffect} from 'react'
import {usePuterStore} from "~/lib/puter";
import {useLocation, useNavigate} from "react-router";

export const meta = () => ([
    {title: 'ai-resume-analyzer | Auth'},
    {name: 'description', content: 'Log into your account'},
])

const Auth = () => {
    const { isLoading, auth } = usePuterStore();
    const location = useLocation();
    const next = location.search.split('next=')[1];
    const navigate = useNavigate();

    useEffect(() => {
        if(auth.isAuthenticated) navigate(next);
        },
        [auth.isAuthenticated, next])

    return (
        <main className="bg-[url('/image/bg-auth.svg'] bg-cover min-h-screen flex items-center justify-center">
            <div className="gradient-border shadow-lg">
                <section>
                    <div className="flex flex-col gap-4 py-6 items-center justify-center">
                        <h1>Welcome</h1>
                        <h2>Log In to Continue Your Job Journey</h2>
                    </div>

                    <div>
                        {isLoading ? (
                            <button className="auth-button animate-pulse">
                                <p>Signing you in ...</p>
                            </button>
                        ) : (
                            <>
                                {auth.isAuthenticated ? (
                                    <button className="auth-button" onClick={auth.signOut}>
                                        Log Out
                                    </button>
                                ) : (
                                    <button className="auth-button" onClick={auth.signIn}>
                                        Log In
                                    </button>
                                )}
                            </>
                        )}
                    </div>
                </section>
            </div>
        </main>
    )
}
export default Auth
