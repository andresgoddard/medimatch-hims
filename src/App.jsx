
import { useState } from "react";

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
    console.log("Lead submitted", form);
    setOpen(false);
    alert("¡Recibimos tu solicitud! Pronto tendrás tus cotizaciones en tu correo ✉️");
  };

  return (
    <main className="font-sans antialiased">
      <section className="bg-gradient-to-br from-teal-50 to-teal-100 py-24 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-teal-800">MediMatch Lite</h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto text-teal-700 mb-8">
          Compara precios, tiempos de espera y reseñas de tratamientos médicos en clínicas privadas — todo en un solo lugar.
        </p>
        <button onClick={() => setOpen(true)} className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-2xl shadow-lg transition">
          Solicita cotización gratis
        </button>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">¿Cómo funciona?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "1. Elige tratamiento", desc: "Colonoscopía, cesárea, cirugía estética, etc." },
            { title: "2. Completa el formulario", desc: "Incluye síntomas, ciudad y fechas preferidas." },
            { title: "3. Recibe cotizaciones", desc: "Compara precios y agenda tu cita en minutos." }
          ].map((step, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="text-teal-600 text-5xl font-black mb-4">{idx + 1}</div>
              <h3 className="font-semibold text-xl mb-2 text-gray-800">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">¿Por qué MediMatch?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { icon: "💸", title: "Transparencia de precios", desc: "Evita sorpresas y conoce el rango de costos antes de decidir." },
            { icon: "⭐", title: "Reseñas verificadas", desc: "Experiencias reales de pacientes que ya se atendieron." },
            { icon: "⏱️", title: "Agenda rápida", desc: "Tiempo promedio de respuesta menor a 24 horas." }
          ].map((f, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="font-semibold text-xl mb-2 text-gray-800">{f.title}</h3>
              <p className="text-gray-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Clínicas destacadas</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((c) => (
            <div key={c} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-start">
              <div className="h-40 w-full bg-teal-100 rounded-xl mb-4" />
              <h4 className="text-lg font-semibold text-gray-800 mb-1">Hospital Privado #{c}</h4>
              <p className="text-sm text-gray-600 mb-2">CDMX • Tiempo de espera: 3 días</p>
              <div className="text-yellow-500 mb-4">⭐⭐⭐⭐☆</div>
              <button onClick={() => setOpen(true)} className="mt-auto bg-teal-600 text-white text-sm py-2 px-4 rounded-xl hover:bg-teal-700 transition">
                Cotizar
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-teal-600 py-16 text-center text-white px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para comparar precios?</h2>
        <button onClick={() => setOpen(true)} className="bg-white text-teal-700 font-semibold py-3 px-8 rounded-2xl shadow-lg hover:bg-gray-100 transition">
          Solicita tu cotización
        </button>
      </section>

      <footer className="bg-gray-800 text-gray-400 py-8 px-6 text-center text-sm">
        © {new Date().getFullYear()} MediMatch Lite • Hecho con ❤️ en México
      </footer>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-lg p-8 relative">
            <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl" onClick={() => setOpen(false)}>
              &times;
            </button>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Solicita tu cotización</h3>
            <form onSubmit={submitForm} className="space-y-4">
              <input type="text" name="name" placeholder="Nombre completo" required className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500" value={form.name} onChange={handleChange} />
              <input type="email" name="email" placeholder="Correo electrónico" required className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500" value={form.email} onChange={handleChange} />
              <select name="treatment" required className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500" value={form.treatment} onChange={handleChange}>
                <option value="">Selecciona tratamiento</option>
                <option value="Colonoscopía">Colonoscopía</option>
                <option value="Cesárea">Cesárea</option>
                <option value="Cirugía estética">Cirugía estética</option>
                <option value="Operación de vesícula">Operación de vesícula</option>
                <option value="Otro">Otro / No listado</option>
              </select>
              <input type="text" name="city" placeholder="Ciudad" required className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500" value={form.city} onChange={handleChange} />
              <label className="block text-sm font-medium text-gray-700">Urgencia</label>
              <div className="flex gap-4">
                {["Normal", "Pronto", "Urgente"].map((value) => (
                  <label key={value} className="flex items-center gap-2 text-gray-600">
                    <input type="radio" name="urgency" value={value} checked={form.urgency === value} onChange={handleChange} className="accent-teal-600" />
                    {value === "Normal" ? "Normal" : value === "Pronto" ? "Próximas 2 semanas" : "Esta semana"}
                  </label>
                ))}
              </div>
              <button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-2xl shadow-lg transition">
                Enviar solicitud
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
