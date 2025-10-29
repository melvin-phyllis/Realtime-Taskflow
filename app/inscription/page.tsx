'use client';

import Footer from '@/components/footer';
import Navbar from '@/components/Navbar';
import Sigin from '@/controllers/Sigin';
import { formUserType } from '@/types';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function InscriptionPage() {

  const route = useRouter()
  const [formUser, setFormUser] = useState<formUserType>({
    firstname: '',
    lastname: '',
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormUser((prev) => ({ ...prev, [name]: value }));

    console.log(formUser)
  };




  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-4rem)] bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 py-16 text-slate-100">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 lg:flex-row lg:items-center lg:gap-16">
          <section className="flex-1 space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-4 py-1 text-xs uppercase tracking-[0.3em] text-emerald-300">
              Inscription
            </span>

            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Creez un compte Realtime Taskflow
            </h1>

            <p className="text-lg text-slate-300">
              Enregistrez-vous pour profiter de la sauvegarde en temps reel et
              gerer vos taches ou que vous soyez.
            </p>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 text-sm text-slate-300">
              <p className="font-semibold text-slate-100">Deja un compte chez nous ?</p>
              <p className="mt-2">Accedez a votre espace personnel en quelques secondes.</p>
              <Link
                href="/connexion"
                className="mt-4 inline-flex items-center justify-center rounded-md border border-emerald-400 px-4 py-2 font-semibold text-emerald-300 transition hover:bg-emerald-400 hover:text-slate-950"
              >
                Aller vers la connexion
              </Link>
            </div>
          </section>

          <section className="w-full max-w-xl flex-1 rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl shadow-emerald-400/10">
            <h2 className="text-2xl font-semibold text-emerald-300">Informations du compte</h2>
            <p className="mt-2 text-sm text-slate-400">
              Ces informations vous permettent de vous connecter et de personnaliser vos listes.
            </p>

            <form className="mt-8 space-y-6 " onSubmit={(e) => Sigin(e, formUser, route)}>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="firstname" className="text-sm font-medium text-slate-200">
                    Prenom
                  </label>
                  <input
                    id="firstname"
                    name="firstname"
                    type="text"
                    value={formUser.firstname}
                    onChange={handleChange}
                    placeholder="Ex: Melvin"
                    className="w-full rounded-lg border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="lastname" className="text-sm font-medium text-slate-200">
                    Nom
                  </label>
                  <input
                    id="lastname"
                    name="lastname"
                    type="text"
                    value={formUser.lastname}
                    onChange={handleChange}
                    placeholder="Ex: Martin"
                    className="w-full rounded-lg border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-200">
                  Adresse email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formUser.email}
                  onChange={handleChange}
                  placeholder="vous@example.com"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30"
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium text-slate-200">
                    Mot de passe
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"

                    onChange={handleChange}
                    placeholder="Minimum 6 caracteres"
                    className="w-full rounded-lg border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="confirmPassword" className="text-sm font-medium text-slate-200">
                    Confirmation
                  </label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    autoComplete="new-password"

                    onChange={handleChange}
                    placeholder="Repetez le mot de passe"
                    className="w-full rounded-lg border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-md bg-emerald-400 px-4 py-3 font-semibold text-slate-950 transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-70"
              >
                Inscription
              </button>
            </form>

            <p className="mt-6 text-center text-xs text-slate-500">
              En validant ce formulaire vous acceptez nos conditions d utilisation.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
