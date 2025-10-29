

import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {


  const user = typeof window !== 'undefined'
    ? JSON.parse(localStorage.getItem('user') || 'null')
    : null

  return (
    <>
      <Navbar />

      <main className="min-h-[calc(100vh-4rem)] bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
        <section className="relative overflow-hidden">
          <div className="mx-auto flex max-w-6xl flex-col-reverse gap-12 px-6 py-20 sm:flex-row sm:items-center sm:justify-between sm:py-28">
            <div className="max-w-xl space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-sm uppercase tracking-wide text-emerald-300">
                Todo list temps r&eacute;el
              </span>
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
                Organisez votre journ&eacute;e avec <span className="text-emerald-300">Realtime Taskflow</span>
              </h1>
              <p className="text-lg text-slate-300">
                Cr&eacute;ez, suivez et mettez &agrave; jour vos t&acirc;ches en toute simplicit&eacute;.
                Cette application Next.js + Firebase vous offre une exp&eacute;rience fluide et r&eacute;active
                pour rester ma&icirc;tre de vos priorit&eacute;s.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href={user ? "/todolist" : "/inscription"}
                  className="inline-flex items-center justify-center rounded-md bg-emerald-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-300"
                >
                  Acc&eacute;der &agrave; la Todo List
                </Link>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-md border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-emerald-400 hover:text-emerald-300"
                >
                  D&eacute;couvrir les fonctionnalit&eacute;s
                </a>
              </div>
            </div>
            <div className="relative mx-auto flex max-w-md flex-none flex-col items-center justify-center rounded-3xl border border-slate-800 bg-slate-900/70 p-8 text-left shadow-2xl shadow-emerald-400/10">
              <div className="w-full space-y-4">
                <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300">
                  Aper&ccedil;u instantan&eacute;
                </p>
                <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Lundi</span>
                    <span>Priorit&eacute;s</span>
                  </div>
                  <ul className="mt-4 space-y-3 text-sm">
                    <li className="flex items-start gap-3 rounded-xl border border-slate-800/80 bg-slate-900/80 p-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                      <div>
                        <p className="font-semibold text-slate-100">Finaliser le rapport hebdo</p>
                        <p className="text-xs text-slate-400">Statut : en cours</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 rounded-xl border border-slate-800/80 bg-slate-900/80 p-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
                      <div>
                        <p className="font-semibold text-slate-100">Planifier le sprint d&eacute;veloppement</p>
                        <p className="text-xs text-slate-400">Statut : en attente</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 rounded-xl border border-slate-800/80 bg-slate-900/80 p-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-purple-400" />
                      <div>
                        <p className="font-semibold text-slate-100">R&eacute;viser la checklist Qualit&eacute;</p>
                        <p className="text-xs text-slate-400">Statut : termin&eacute;</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="border-t border-slate-800 bg-slate-950/60 py-20"
        >
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-center text-3xl font-semibold text-slate-100 sm:text-4xl">
              Tout ce qu&rsquo;il faut pour rester organis&eacute;
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-center text-slate-400">
              Realtime Taskflow combine la puissance de Next.js 16, React 19 et Firebase pour offrir
              une exp&eacute;rience de gestion de t&acirc;ches moderne, intuitive et instantan&eacute;e.
            </p>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
                <h3 className="text-xl font-semibold text-emerald-300">Gestion en temps r&eacute;el</h3>
                <p className="mt-3 text-sm text-slate-400">
                  Vos t&acirc;ches sont synchronis&eacute;es instantan&eacute;ment avec Firebase Realtime Database,
                  pour un suivi fiable sur tous vos appareils.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
                <h3 className="text-xl font-semibold text-sky-300">Modale d&rsquo;&eacute;dition fluide</h3>
                <p className="mt-3 text-sm text-slate-400">
                  Mettez &agrave; jour vos t&acirc;ches sans quitter la vue principale gr&acirc;ce &agrave; une interface de
                  modification intuitive et contr&ocirc;l&eacute;e.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
                <h3 className="text-xl font-semibold text-purple-300">Notifications utiles</h3>
                <p className="mt-3 text-sm text-slate-400">
                  Recevez un feedback instantan&eacute; avec React-Toastify pour chaque cr&eacute;ation,
                  mise &agrave; jour ou suppression de t&acirc;che.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
