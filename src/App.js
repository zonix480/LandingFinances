import React from 'react';
import { useState } from 'react';
import loader from './images/loader.gif'; // with import
import Swal from "sweetalert2";


function App() {

  const [formData, setFormData] = useState({
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const [showForm, setshowForm] = useState(true);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    if (!formData.email || !formData.company || !formData.phone || !formData.message) {
      Swal.fire({
        title: `Por favor completa todos los campos`,
        showCancelButton: false,
        confirmButtonText: "Aceptar",
        icon: "warning",
      });
      return;
    }
    try {
      setshowForm(false);
      const response = await fetch('https://script.google.com/macros/s/AKfycby-YQjunQIf-cSWn-ixQUg16C5h2ZDH-LB3YDO82vB8wcG6sVBN5ohlJlDfiBe9go3S/exec', {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' },
      });
      Swal.fire({
        title: `Enviado Gracias por tu apoyo!`,
        showCancelButton: false,
        confirmButtonText: "Aceptar",
        icon: "success",
      }).then(async (result) => {
        if (result.isConfirmed) {
          setFormData({ email: '', company: '', phone: '', message: '' });
          window.location.reload();
          //Accion en caso de que elijan el SI 
        }
      });


    } catch (error) {
      alert('Error al enviar: ' + error.message);
    }
  };

  return (
    <div >
      {/* Header */}
      <div className='p-5 bg-black text-white'>
        <h1 className='text-center text-3xl font-montserrat animate-in fade-in zoom-in'>MONAI</h1>
      </div>
      {/* Banner */}
      <div class="h-screen bg-image text-white " >
        <div class="flex flex-row min-h-screen justify-center items-center">
          <h1 className='font-montserrat text-white text-6xl md:text-8xl pb-10 row-span-2 font-bold animate-in zoom-in blur-none' >
            Controla<br />tu dinero<br />como<br /> nunca<br /> antes
          </h1>
        </div>
      </div>

      {/* Banner */}
      <div class="flex flex-row min-h-screen justify-center items-center">
        <h1 className='text-center text-white text-3xl font-montserrat animate-in fade-in zoom-in mx-auto p-4'>La app financiera que combina IA y simplicidad</h1>
      </div>
      <div class="flex flex-col min-h-screen justify-center items-center mx-auto p-4">
        <h5 class="mb-2 text-3xl font-bold  dark:text-white mb-8 font-montserrat">Invierte en el Futuro de las Finanzas Personales</h5>
        <ul class="max-w-md space-y-1 list-disc text-white list-inside font-montserrat">
          <li>
            Innovación: Aplicación móvil con IA para educación financiera
          </li>
          <li>
            Mercado objetivo: Todas las edades, desde jóvenes hasta adultos mayores
          </li>
          <li>
            Asistencia 24/7: Soporte al cliente y asesoría financiera en tiempo real
          </li>
          <li>
            Una app para usar a diario ...
          </li>
        </ul>
      </div>

      <div class="w-full p-4 text-center rounded-lg shadow-sm sm:p-8 bg-black hidden">

        <div class="flex flex-row justify-center items-center blur-sm hidden">

          <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Standard plan</h5>
            <div class="flex items-baseline text-gray-900 dark:text-white">
              <span class="text-3xl font-semibold">$</span>
              <span class="text-5xl font-extrabold tracking-tight">120</span>
              <span class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/Lorem</span>
            </div>
            <ul role="list" class="space-y-5 my-7">
              <li class="flex items-center">
                <svg class="shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Lorem</span>
              </li>
              <li class="flex">
                <svg class="shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Lorem</span>
              </li>
              <li class="flex">
                <svg class="shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Lorem</span>
              </li>
              <li class="flex line-through decoration-gray-500">
                <svg class="shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500 ms-3">Lorem</span>
              </li>
              <li class="flex line-through decoration-gray-500">
                <svg class="shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500 ms-3">Lorem</span>
              </li>
              <li class="flex line-through decoration-gray-500">
                <svg class="shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500 ms-3">Lorem</span>
              </li>
              <li class="flex line-through decoration-gray-500">
                <svg class="shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500 ms-3">Lorem Lorem</span>
              </li>
            </ul>
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
          </div>
        </div>
      </div>


      <div class="flex flex-col min-h-screen justify-center items-center w-full p-4 text-center rounded-lg shadow-sm sm:p-8 bg-black">
        <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Proximamente disponible</h5>
        <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">La descarga de nuestra app estara disponible pronto en las principales tiendas de apps moviles</p>
        <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
          <a href="#" class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 blur-sm">
            <svg class="me-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
            <div class="text-left rtl:text-right">
              <div class="mb-1 text-xs">Download on the</div>
              <div class="-mt-1 font-sans text-sm font-semibold">Mac App Store</div>
            </div>
          </a>
          <a href="#" class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 blur-sm">
            <svg class="me-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path></svg>
            <div class="text-left rtl:text-right">
              <div class="mb-1 text-xs">Get in on</div>
              <div class="-mt-1 font-sans text-sm font-semibold">Google Play</div>
            </div>
          </a>
        </div>
      </div>

      <div class="w-full p-4 text-center rounded-lg shadow-sm sm:p-8 bg-black mt-[120px]">
        <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Inscribete en nuestra lista de espera y se el primero en recibir nuestra app</h5>
      </div>
      <div class="flex flex-row  justify-center items-center mb-[120px] mx-auto p-4">
        {!showForm &&
          <svg className='w-20 h-20 animate-spin  size-6 text-white' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
          </svg>
        }
        {showForm && <form class="w-full md:w-1/2 lg:w-1/3 sm:p-8" onSubmit={(e) => e.preventDefault()}>
          <div class="relative z-0 w-full mb-5 group">
            <input required onChange={handleChange} type="email" name="email" id="email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Correo Electronico</label>
          </div>
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-5 group">
              <input  required onChange={handleChange} type="text" name="company" id="company" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="company" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Empresa</label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <input required onChange={handleChange} type="number" name="phone" id="phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Celular</label>
            </div>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input required onChange={handleChange} type="message" name="message" id="message" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="message" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mensaje</label>
          </div>
          <button onClick={handleSubmit} type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviar</button>
        </form>}
      </div>

      <footer class="bg-white rounded-lg shadow-sm dark:bg-gray-900 m-4">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between text-center">
            <h1 className='text-center text-3xl font-montserrat animate-in fade-in zoom-in text-white'>MONAI</h1>
            <div className='m-4'>

              <a href="#" class="hover:underline me-4 md:me-6 text-white text-center p-8">Conoce el Desarrollador</a>

            </div>

          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="https://flowbite.com/" class="hover:underline">MONAI</a>. All Rights Reserved.</span>
        </div>
      </footer>

    </div>
  );
}

export default App;