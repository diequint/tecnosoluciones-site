// ContactForm.jsx
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'El nombre es requerido';
    if (!formData.email) newErrors.email = 'El email es requerido';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Formato de email inválido';
    if (!formData.phone) newErrors.phone = 'El teléfono es requerido';
    if (!formData.message) newErrors.message = 'El mensaje es requerido';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSubmitted(true);
      console.log('Form submitted:', formData);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }
  };

  return (
    <div className="mx-auto my-2 rounded-lg w-[90%]">
      <h2 className="text-3xl font-bold text-gray-800 text-center py-4 mb-5">
        Contáctanos
      </h2>
      
      {isSubmitted && (
        <p className="text-green-600 text-center mb-5 px-5 py-4 bg-green-100 rounded-md mx-4">
          ¡Gracias por contactarnos! Te responderemos pronto.
        </p>
      )}

      <form className="p-5 flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label 
            htmlFor="name"
            className="text-gray-600 font-semibold mb-1"
          >
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`p-2 border rounded-md outline-none transition-colors
              ${errors.name 
                ? 'border-red-500 focus:border-red-600' 
                : 'border-gray-300 focus:border-blue-500'
              }`}
          />
          {errors.name && (
            <small className="text-red-500 text-sm mt-1">{errors.name}</small>
          )}
        </div>

        <div className="flex flex-col">
          <label 
            htmlFor="email"
            className="text-gray-600 font-semibold mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`p-2 border rounded-md outline-none transition-colors
              ${errors.email 
                ? 'border-red-500 focus:border-red-600' 
                : 'border-gray-300 focus:border-blue-500'
              }`}
          />
          {errors.email && (
            <small className="text-red-500 text-sm mt-1">{errors.email}</small>
          )}
        </div>

        <div className="flex flex-col">
          <label 
            htmlFor="phone"
            className="text-gray-600 font-semibold mb-1"
          >
            Teléfono
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`p-2 border rounded-md outline-none transition-colors
              ${errors.phone 
                ? 'border-red-500 focus:border-red-600' 
                : 'border-gray-300 focus:border-blue-500'
              }`}
          />
          {errors.phone && (
            <small className="text-red-500 text-sm mt-1">{errors.phone}</small>
          )}
        </div>

        <div className="flex flex-col">
          <label 
            htmlFor="message"
            className="text-gray-600 font-semibold mb-1"
          >
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className={`p-2 border rounded-md outline-none transition-colors resize-y
              ${errors.message 
                ? 'border-red-500 focus:border-red-600' 
                : 'border-gray-300 focus:border-blue-500'
              }`}
          />
          {errors.message && (
            <small className="text-red-500 text-sm mt-1">{errors.message}</small>
          )}
        </div>

        <button 
          type="submit" 
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 
            transition-colors mt-2 font-semibold"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
