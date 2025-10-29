

'use client';

import Link from "next/link";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-slate-800 bg-slate-950/90 text-slate-300">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-slate-400">
                    &copy; {currentYear} Akou Melvin &mdash; Dev Full Stack Junior.
                </p>

                <div className="flex items-center gap-4 text-sm">
                    <Link
                        href="https://www.linkedin.com/in/melvin-akou/"
                        target="_blank"
                        rel="noreferrer"
                        className="transition hover:text-emerald-300"
                    >
                        LinkedIn
                    </Link>
                    <span className="text-slate-600">|</span>
                    <Link
                        href="https://github.com/melvin-phyllis"
                        target="_blank"
                        rel="noreferrer"
                        className="transition hover:text-emerald-300"
                    >
                        GitHub
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
