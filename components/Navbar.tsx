"use client"

import Logout from "@/controllers/Logout";
import { useTodoStore } from "@/Store/TodoList";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const Navbar = () => {
  const { usersinfo, GetinfoUser } = useTodoStore()
  const pathname = usePathname()
  const router = useRouter()
  useEffect(() => (GetinfoUser()), [])
  return (
    <header className="border-b border-slate-800 bg-slate-950/80 text-slate-100 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-">
        <Link href="/" className="text-xl font-semibold tracking-tight text-emerald-300">
          Melvin.dev
        </Link>

        <div className="flex items-center gap-8">


          <div className="flex items-center gap-4 text-sm">
            {!usersinfo ? (<>
              <Link href={"/connexion"} className="rounded-md border border-slate-700 px-4 py-1.5 font-semibold transition hover:border-emerald-400 hover:text-emerald-300">
                Connexion
              </Link>
              <Link href={"inscription"} className="rounded-md bg-emerald-400 px-4 py-1.5 font-semibold text-slate-950 transition hover:bg-emerald-300">
                Inscription
              </Link>
            </>) : (
              <>
                <Link href={"/todolist"} className="rounded-md bg-emerald-400 px-4 py-1.5 font-semibold text-slate-950 transition hover:bg-emerald-300">
                  Todolist
                </Link>
              </>)}

          </div>

        </div>
        <div className="flex gap-5">
          {usersinfo && (<><button className="">Bienvenue <span className="font-bold">{usersinfo?.firstname + " " + usersinfo?.lastname}</span> </button>
            <button onClick={() => Logout(router)} className="btn btn-sm btn-warning cursor-pointer ">Deconnexion </button>
          </>)}
        </div>
      </nav>

    </header>
  );
};

export default Navbar;
