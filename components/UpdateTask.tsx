import EditTask from "@/controllers/EditTaskServer"
import { useTodoStore } from "@/Store/TodoList"
import { formTasktType } from "@/types"
import { ChangeEvent, useEffect, useState } from "react"

const UpdateTask = ({ item }: { item: formTasktType }) => {
    const { Update,usersinfo } = useTodoStore()
    const [form, setform] = useState<formTasktType>(
        {
            title: item?.title ?? "",
            description: item?.description ?? "",
            time: item?.time ?? "",
            status: item?.status ?? "waiting"

        }
    )

    useEffect(() => setform({
        title: item?.title ?? "",
        description: item?.description ?? "",
        time: item?.time ?? "",
        status: item?.status ?? "waiting"


    }), [item])

    const HandleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target
        setform(prev => ({
            ...prev, [name]: value
        }))

    }

    return (

        <dialog
            id="my_modal_1"
            className="modal backdrop:bg-slate-900/70 backdrop:backdrop-blur-sm"
        >
            <div className="modal-box w-full max-w-2xl transform rounded-3xl border border-slate-800 bg-slate-900/80 p-0 shadow-2xl shadow-emerald-400/10 transition-all">
                <div className="border-b border-slate-800 px-6 py-5">
                    <h3 className="text-xl font-semibold text-emerald-300">
                        Modifier la tâche
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">
                        Ajustez les informations puis validez pour synchroniser les changements.
                    </p>
                </div>

                <div className="px-6 py-6">
                    < form action="" className="flex flex-col gap-6" onSubmit={(e) => EditTask(e, form, item, Update,usersinfo)} method="dialog">
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-200">Title</label>     
                                <input
                                    type="text"
                                    className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/40"
                                    placeholder="My awesome page"
                                    name="title"
                                    value={form?.title}
                                    onChange={(e) => HandleChange(e)}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-200">Time</label>
                                <input
                                    type="date"
                                    className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/40"
                                    placeholder="Name"
                                    name="time"
                                    value={form?.time}
                                    onChange={(e) => HandleChange(e)}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-200">Description</label>
                            <input
                                type="text"
                                className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/40"
                                placeholder="my-awesome-page"
                                name="description"
                                value={form?.description}
                                onChange={(e) => HandleChange(e)}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-200">Status</label>
                            <select
                                value={form?.status}
                                className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/40"
                                name="status"
                                onChange={(e) => HandleChange(e)}
                            >
                                <option value={"pending"}>Pending</option>
                                <option value={"done"}>Done</option>
                                <option value={"waiting"}>Waiting</option>
                            </select>
                        </div>


                    </form >
                    <div className="flex flex-col items-center justify-end gap-3 border-t border-slate-800 pt-6 sm:flex-row">
                        <button
                            type="submit"
                            className="w-full rounded-xl bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300 sm:w-auto"
                        >
                            Update
                        </button>

                        <form method="dialog" className="w-full sm:w-auto">
                            <button className="w-full rounded-xl border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-emerald-400 hover:text-emerald-300">
                                Close
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </dialog>
    )
}

export default UpdateTask



