"use client";

import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Message envoyé !");
  };

  return (
    <section id="contact" className="p-10 bg-gray-800 text-white">
      <h2 className="text-3xl font-bold text-center">Contactez-moi</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 max-w-lg mx-auto">
        <input
          {...register("name", { required: true })}
          placeholder="Votre nom"
          className="w-full p-3 mb-4 border border-gray-300 rounded"
        />
        {errors.name && <span className="text-red-500">Nom requis</span>}

        <input
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          placeholder="Votre email"
          className="w-full p-3 mb-4 border border-gray-300 rounded"
        />
        {errors.email && <span className="text-red-500">Email invalide</span>}

        <textarea
          {...register("message", { required: true })}
          placeholder="Votre message"
          className="w-full p-3 mb-4 border border-gray-300 rounded"
        />
        {errors.message && <span className="text-red-500">Message requis</span>}

        <button className="w-full p-3 bg-blue-500 rounded hover:bg-blue-600">
          Envoyer
        </button>
      </form>
    </section>
  );
};

export default Contact;
