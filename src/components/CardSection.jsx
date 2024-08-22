import React, { useState } from 'react';

function CardsSection() {
  const cards = [
    { id: 1, image: 'salitre.jpg', text: 'Día de Diversión en Salitre Mágico o Mundo Aventura', description: 'Disfruta de un día lleno de adrenalina y diversión en uno de los mejores parques de atracciones. 😁' },
    { id: 2, image: 'pueblito.jpg', text: 'Pueblear con Fotos Ilimitadas y sin Renegar', description: 'Explora los pintorescos pueblos y captura momentos inolvidables sin preocupaciones, con tu fotografo de cabecera y sin renegar de las mil fotos jajaja 🤣 ' },
    { id: 3, image: 'cena.jpg', text: 'Cena en tu Restaurante Favorito', description: 'Deléitate con una cena exquisita en tu restaurante preferido, ¡a cargo de la casa! 😜' },
    { id: 4, image: 'cepeda.jpg', text: 'Concierto al que Quieras Ir', description: 'Asiste a un concierto de tu elección y vive una experiencia musical inolvidable. 🤳 🎶' },
    { id: 5, image: 'sorpresa.jpg', text: 'Actividad Sorpresa "yo Elijo"', description: 'Déjate sorprender con una actividad especial seleccionada especialmente para ti, (aun que tu sabes ya cual escogeria yo jajaja). 😎' },
    { id: 6, image: 'comedy.jpg', text: 'Tú Show de Comedia Favorito', description: 'Disfruta de una noche innolvidable en el show de comedia que siempre hayas querido ver. 😁' },
  ];

  const [selectedCard, setSelectedCard] = useState(null);

  const handleDetailsClick = (card) => {
    setSelectedCard(card);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  return (
    <div className="py-8">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 text-center text-[#885fff]">
        Ahora Si Selecciona<br/> Tu Regalo Lizz
      </h1>
      <div className="w-full h-auto bg-cover Helvetica bg-center flex flex-wrap items-center justify-center gap-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div key={card.id} className="card w-full max-w-xs mx-auto">
              <div className="card-inner">
                <div className="card-front bg-[#e0dcda] rounded-lg shadow-2xl border-2 border-blue-700 overflow-hidden">
                  <img
                    src={card.image}
                    alt={`Card ${card.id}`}
                    className="w-full h-48"
                  />
                  <div className="p-8 flex flex-col justify-center">
                    <p className="text-lg text-center font-semibold mb-4">{card.text}</p>
                  </div>
                </div>
                <div className="card-back flex flex-col items-center justify-center p-4">
                  <button
                    className="w-1/2 py-2 px-4 mb-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                    onClick={() => handleDetailsClick(card)}
                  >
                    Detalles
                  </button>
                  <button className="w-1/2 py-2 px-4 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors">
                    Seleccionar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCard && (
        <div className="fixed inset-0 flex Helvetica items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <img
              src={selectedCard.image}
              alt={`Card ${selectedCard.id}`}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">{selectedCard.text}</h2>
            <p className="text-gray-700">{selectedCard.description}</p>
            <button
              className="mt-4 w-full py-2 px-4 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors"
              onClick={closeModal}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
      <div className=' flex flex-col items-center w-full'>
      <h1 className=' text-center w-1/2 text-[#885fff] text-2xl'>

Hoy brillan las estrellas con más intensidad,
El sol te envía un rayo de felicidad,
Las flores susurran un dulce cantar,
Porque hoy es tu día, ¡vamos a celebrar!

Que cada segundo esté lleno de amor,
Que la vida te regale su mejor color,
Risas, abrazos y sueños por cumplir,
Hoy y siempre, ¡te deseo lo mejor por vivir!</h1>
<h1 className=' text-5xl text-red-500 mt-3 text-center'>Con Cariño <br/> Chris!</h1>


      </div>
    </div>
  );
}

export default CardsSection;
