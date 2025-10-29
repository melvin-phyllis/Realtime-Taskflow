import { AddTask } from "@/components/AddTask";
import Footer from "@/components/footer";
import ListTask from "@/components/ListTask";
import Navbar from "@/components/Navbar";
import ToastContent from "@/Toast/ToastContent";

const TodoListPage = () => {
  return (
    <><Navbar/>
      <main className="min-h-screen bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 py-16 text-slate-100">
        <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6">
          <section className="flex flex-col gap-10 rounded-3xl border border-slate-800 bg-slate-900/70 p-10 shadow-2xl shadow-emerald-400/10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-400/10 px-3 py-1 text-xs uppercase tracking-widest text-emerald-300">
                Dashboard en temps réel
              </span>
              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Gérez vos tâches avec <span className="text-emerald-300">Realtime Taskflow</span>
              </h1>
              <p className="text-base text-slate-300">
                Créez de nouvelles tâches, mettez-les à jour et suivez leur progression sans quitter
                cette page. Toutes les modifications sont synchronisées avec Firebase Realtime
                Database et reflétées instantanément dans votre tableau.
              </p>
            </div>
            <div className="w-full max-w-sm rounded-2xl border border-emerald-500/20 bg-slate-950/60 p-6 text-sm text-slate-300">
              <p className="font-semibold text-emerald-300">Astuce</p>
              <p className="mt-2 leading-relaxed">
                Utilisez le statut <strong className="text-white">Waiting</strong> pour vos idées,
                <strong className="text-white"> Pending</strong> pour les tâches en cours et
                <strong className="text-white"> Done</strong> pour célébrer vos réussites.
              </p>
              <p className="mt-4 text-xs text-slate-500">
                Toutes les actions déclenchent des notifications visuelles afin que vous sachiez
                toujours si l’opération a réussi.
              </p>
            </div>
          </section>

          <section className="grid gap-10 lg:grid-cols-[340px,1fr]">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-emerald-400/5">
              <h2 className="text-xl font-semibold text-emerald-300">Ajouter une nouvelle tâche</h2>
              <p className="mt-2 text-sm text-slate-400">
                Renseignez un titre, une description et une date d’échéance pour enrichir votre liste.
              </p>
              <div className="mt-6">
                <AddTask />
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-emerald-400/5">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-emerald-300">Vos tâches actives</h2>
                  <p className="text-sm text-slate-400">
                    Cliquez sur « edit » pour ajuster une tâche ou « delete » pour la retirer.
                  </p>
                </div>
              </div>
              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-800">
                <ListTask />
              </div>
            </div>
          </section>
        </div>

        
      </main>
      <Footer/>
    </>
  );
};

export default TodoListPage;
