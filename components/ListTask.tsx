
"use client";

import DeleteItemServer from "@/controllers/DeleteItemServer";
import GetServer from "@/controllers/GetServer";
import { useTodoStore } from "@/Store/TodoList";
import { formTasktType } from "@/types";
import { useEffect, useState } from "react";
import UpdateTask from "./UpdateTask";



const emptyTask: formTasktType = {
    id: "",
    title: "",
    description: "",
    time: "",
    status: "waiting",
};

const ListTasks = () => {
    const { GetTask, ListTAsk, usersinfo } = useTodoStore();
    const [selectedTask, setSelectedTask] = useState<formTasktType>(emptyTask);

    useEffect(() => {
        if (usersinfo?.id) {
            void GetServer(GetTask, usersinfo);
        }
    }, [GetTask, usersinfo?.id]);

    const openModal = (task: formTasktType) => {
        const dialog = document.getElementById("my_modal_1") as HTMLDialogElement | null;
        setSelectedTask(task);
        dialog?.showModal();
    };






    return (
        <div className="space-y-6">
            {ListTAsk.length ? (
                <div className="overflow-hidden rounded-2xl border border-slate-800">
                    <table className="min-w-full divide-y divide-slate-800 text-sm">
                        <thead className="bg-slate-950/60 text-xs uppercase tracking-wider text-slate-400">
                            <tr>
                                <th className="px-4 py-3 text-left">#</th>
                                <th className="px-4 py-3 text-left">Titre</th>
                                <th className="px-4 py-3 text-left">Description</th>
                                <th className="px-4 py-3 text-left">Échéance</th>
                                <th className="px-4 py-3 text-left">Statut</th>
                                <th className="px-4 py-3 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800 text-slate-200">
                            {ListTAsk.map((task, index) => (
                                <tr
                                    key={task.id ?? `task-${index}`}
                                    className="transition hover:bg-slate-950/40"
                                >
                                    <td className="px-4 py-4 text-sm font-medium text-slate-400">
                                        {index + 1}
                                    </td>
                                    <td className="px-4 py-4 font-semibold text-slate-100">
                                        {task.title || "Sans titre"}
                                    </td>
                                    <td className="px-4 py-4 text-slate-300">
                                        {task.description || "—"}
                                    </td>
                                    <td className="px-4 py-4 text-slate-300">
                                        {(task.time)}
                                    </td>
                                    <td className="px-4 py-4">{(task.status)}</td>
                                    <td className="px-4 py-4">
                                        <div className="flex flex-wrap gap-3">
                                            <button
                                                className="inline-flex items-center rounded-lg border border-emerald-400/50 px-4 py-2 text-xs font-semibold text-emerald-300 transition hover:bg-emerald-400/10"
                                                onClick={() => openModal(task)}
                                            >
                                                Modifier
                                            </button>
                                            <button
                                                className="inline-flex items-center rounded-lg border border-red-500/40 px-4 py-2 text-xs font-semibold text-red-300 transition hover:bg-red-500/10"
                                                onClick={() =>
                                                    DeleteItemServer(task, GetTask, ListTAsk,usersinfo)
                                                }
                                            >
                                                Supprimer
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="rounded-2xl border border-dashed border-slate-800/80 bg-slate-950/40 p-10 text-center">
                    <h3 className="text-lg font-semibold text-slate-200">
                        Aucune tâche enregistrée pour l’instant
                    </h3>
                    <p className="mt-2 text-sm text-slate-400">
                        Utilisez le formulaire d’ajout pour créer votre première action.
                    </p>
                </div>
            )}

            <UpdateTask item={selectedTask} />
        </div>
    );
};

export default ListTasks;
