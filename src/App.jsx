
import { useState } from "react";
import "./index.css";

export default function MediMatchLanding() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    treatment: "",
    city: "",
    urgency: "Normal",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    alert("¡Recibimos tu solicitud! Pronto tendrás tus cotizaciones en tu correo ✉️");
    setOpen(false);
  };

  return (
    <main className="font-sans">
      {/* Hero */}
      <section className="bg-gradient-to-br from-rose-50 to-rose-100 py-24 px-6 text-center">
        <h1 className="text-5xl font-extrabold text-rose-800 mb-4">MediMatch</h1>
        <p className="text-xl text-rose-700 mb-6">
          Cotiza tratamientos médicos en segundos. Rápido, seguro y sin compromisos.
        </p>
        <button
          onClick={() => setOpen(true)}
          className="bg-rose-600 text-white px-6 py-3 rounded-full hover:bg-rose-700 transition"
        >
          Obtener cotización
        </button>
      </section>

      {/* Beneficios */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-left">
          {[
            {
              icon: "💸",
              title: "Transparencia total",
              desc: "Conoce precios antes de agendar.",
            },
            {
              icon: "📍",
              title: "Cerca de ti",
              desc: "Filtramos por clínicas privadas en tu ciudad.",
            },
            {
              icon: "📩",
              title: "Respuestas rápidas",
              desc: "Recibe opciones personalizadas en menos de 24h.",
            },
          ].map((item, i) => (
            <div key={i}>
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Formulario Modal */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full relative">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-2xl"
              onClick={() => setOpen(false)}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-rose-800">Cotiza tu tratamiento</h2>
            <form onSubmit={submitForm} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Nombre completo"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
              />
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
              />
              <input
                type="text"
                name="treatment"
                placeholder="Tratamiento requerido"
                required
                value={form.treatment}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
              />
              <input
                type="text"
                name="city"
                placeholder="Ciudad"
                required
                value={form.city}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
              />
              <div className="text-sm text-gray-700 font-medium">Urgencia</div>
              <div className="flex gap-3">
                {["Normal", "Pronto", "Urgente"].map((u) => (
                  <label key={u} className="flex items-center gap-1 text-sm">
                    <input
                      type="radio"
                      name="urgency"
                      value={u}
                      checked={form.urgency === u}
                      onChange={handleChange}
                      className="accent-rose-600"
                    />
                    {u}
                  </label>
                ))}
              </div>
              <button
                type="submit"
                className="w-full bg-rose-600 text-white font-semibold py-2 rounded-lg hover:bg-rose-700 transition"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
