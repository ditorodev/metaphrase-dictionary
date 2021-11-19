import React from "react"
import Link from "next/link"

interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return <div className="mx-auto w-full max-w-6xl min- flex flex-col h-full">
        <div className="py-5 px-3">
        <header className="flex flex-row w-full pb-2 justify-between">
            <div className="background-header"></div>
            <span className="font-serif text-2xl text-maintext">
                Metaphrase
            </span>
            <nav className="space-x-5 text-maintext">
                <Link href="/search">
                    <a className="hover:underline hover:text-linkaccent">
                        Search
                    </a>
                </Link>
                <Link href="/about">
                    <a className="hover:underline hover:text-linkaccent">
                        About
                    </a>
                </Link>
            </nav>
        </header>
        <hr className="-mx-3 bg-maintext opacity-60"/>
        </div>
        <div className="h-full">
            {children}
        </div>
    </div>
}

export default Layout;