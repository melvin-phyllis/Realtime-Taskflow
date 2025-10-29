"use client";

import SendServer from "@/controllers/SendServer";
import { useTodoStore } from "@/Store/TodoList";
import { formTasktType } from "@/types";
import { ChangeEvent, useState } from "react";

export const AddTask = () => {
  const { add ,usersinfo} = useTodoStore();
  const [load, setload] = useState(false);


  const [form, setform] = useState<formTasktType>({
    title: "",
    description: "",
    time: "",
    status: "waiting",
  });

  const handleChange = ( event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setform((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={(event) => SendServer(event, form, setload, add,usersinfo)}
      className="space-y-5"
    >
      <div className="space-y-2">
        <label htmlFor="title" className="text-sm font-medium text-slate-200">
          Titre
        </label>
        <input
          id="title"
          name="title"
          type="text"
          value={form.title ?? ""}
          onChange={handleChange}
          placeholder="Préparer la réunion produit"
          required
          className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/40"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="description"
          className="text-sm font-medium text-slate-200"
        >
          Description
        </label>
        <input
          id="description"
          name="description"
          type="text"
          value={form.description ?? ""}
          onChange={handleChange}
          placeholder="Lister les points clés à aborder"
          required
          className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/40"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="time" className="text-sm font-medium text-slate-200">
            Échéance
          </label>
          <input
            id="time"
            name="time"
            type="date"
            value={form.time ?? ""}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/40"
          />
        </div>


      </div>

      <button
        type="submit"
        disabled={load}
        className="inline-flex w-full items-center justify-center rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:bg-emerald-400/60"
      >
        {load ? (
          <span className="inline-flex items-center gap-2">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-900 border-t-transparent" />
            Enregistrement…
          </span>
        ) : (
          "Ajouter la tâche"
        )}
      </button>
    </form>
  );
};
