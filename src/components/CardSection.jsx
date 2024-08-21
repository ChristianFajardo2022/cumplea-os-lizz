import React from 'react';

function CardsSection() {
  const cards = [
    { id: 1, image: 'salitre.jpg', text: 'Día de Diversión en Salitre Mágico o Mundo Aventura' },
    { id: 2, image: 'pueblito.jpg', text: 'Pueblear con Fotos Ilimitadas y sin Renegar' },
    { id: 3, image: 'cena.jpg', text: 'Cena en tu Restaurante Favorito' },
    { id: 4, image: 'cepeda.jpg', text: 'Concierto al que Quieras Ir' },
    { id: 5, image: 'sorpresa.jpg', text: 'Actividad Sorpresa yo Elijo' },
  ];

  return (
    <div>
      <h1 className="text-8xl font-bold text-center text-[#C1FF72] text-shadow">
        TU REGALO
      </h1>
      <div className="w-full h-full my-8 pb-8 bg-cover bg-center flex items-center justify-center">
        <div className='card-container'>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 place-items-center">
            {cards.slice(0, 3).map((card) => (
              <div key={card.id} className="card">
                <div className="card-inner">
                  <div className="card-front  rounded-lg shadow-lg overflow-hidden">
                    <img
                      src={card.image}
                      alt={`Card ${card.id}`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <p className="text-lg text-center font-semibold mb-4">{card.text}</p>
                    </div>
                  </div>
                  <div className="card-back">
                    <button className="w-1/2 py-2 px-4 rounded-lg">
                      Detalles
                    </button>
                    <button className="w-1/2 py-2 px-4 rounded-lg">
                      Seleccionar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 mt-8 place-items-center">
            {cards.slice(3).map((card) => (
              <div key={card.id} className="card">
                <div className="card-inner">
                  <div className="card-front  rounded-lg shadow-lg overflow-hidden">
                    <img
                      src={card.image}
                      alt={`Card ${card.id}`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <p className="text-lg text-center font-semibold mb-4">{card.text}</p>
                    </div>
                  </div>
                  <div className="card-back">
                    <button className="w-1/2 py-2 px-4 rounded-lg">
                      Detalles
                    </button>
                    <button className="w-1/2 py-2 px-4 rounded-lg">
                      Seleccionar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsSection;
