document.addEventListener('DOMContentLoaded', function () {
    const back_btn = document.getElementById('back_btn');

    // redirect to index
    back_btn.addEventListener('click', function () {
        window.location.href = `/`
    })

    // call to get the result 
    getHistory().then(historyObj => {
        drawHistory(historyObj);
    })

    async function getHistory() {
        let response = await fetch(`/get-history`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        // wait to the response and it's converted to json
        let history = await response.json();

        // return the history result
        return history
    }

    // function to draw all the history
    function drawHistory(historyObj) {
        try {
            const chat_container = document.getElementById('chat_container');
            chat_container.innerHTML = '';

            // checks if the response was successfully
            if (historyObj.status === 200) {
                const history_container = document.createElement('div');
                history_container.className = 'flex flex-col gap-4 p-2';

                // if there is not any element in the history
                if (historyObj.history.length === 0) {
                    const emptyState = document.createElement('div');
                    emptyState.className = 'text-center py-12 text-gray-400';
                    emptyState.innerHTML = `
                    <div class="text-6xl mb-4">💭</div>
                    <p class="text-lg mb-2">No hay conversaciones aún</p>
                    <p class="text-sm">Haz tu primera pregunta para comenzar</p>
                `;
                    history_container.appendChild(emptyState);
                } else {
                    historyObj.history.forEach((element) => {
                        const history_card = document.createElement('div');
                        history_card.className = 'group cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl';

                        history_card.innerHTML = `
                        <div class="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-5 shadow-lg border border-indigo-400/20 backdrop-blur-sm">
                            <!-- Header con título y fecha -->
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-white font-semibold text-lg leading-tight flex-1 mr-3">
                                    ${element.Titulo}
                                </h3>
                                <span class="text-indigo-200 text-xs bg-black/20 px-2 py-1 rounded-full whitespace-nowrap">
                                    ${element.Fecha}
                                </span>
                            </div>                        
                            <div class="mb-3 p-3 bg-white/10 rounded-lg border-l-4 border-yellow-400">
                                <div class="flex items-center mb-1">
                                    <span class="text-yellow-300 text-sm font-medium">Pregunta:</span>
                                </div>
                                <p class="text-white text-sm leading-relaxed">
                                    ${element.Pregunta}
                                </p>
                            </div>                        
                            <div class="mb-3 p-3 bg-white/10 rounded-lg border-l-4 border-green-400">
                                <div class="flex items-center mb-1">
                                    <span class="text-green-300 text-sm font-medium">Respuesta:</span>
                                </div>
                                <p class="text-white text-sm leading-relaxed line-clamp-3">
                                    ${element.Respuesta}
                                </p>
                            </div>
                        </div>
                    `;

                        history_container.appendChild(history_card);
                    });
                }

                chat_container.appendChild(history_container);
                // In case of error
            } else {
                const error_container = document.createElement('div');
                error_container.className = 'flex flex-col items-center justify-center py-12 text-center';
                error_container.innerHTML = `
                <div class="text-6xl mb-4">⚠️</div>
                <h3 class="text-xl font-semibold text-red-400 mb-2">Error al cargar el historial</h3>
                <p class="text-gray-400 mb-4">No se pudo obtener el historial de conversaciones</p>`;
                chat_container.appendChild(error_container);
            }            
        } catch (error) {
            const error_container = document.createElement('div');
                error_container.className = 'flex flex-col items-center justify-center py-12 text-center';
                error_container.innerHTML = `
                <div class="text-6xl mb-4">⚠️</div>
                <h3 class="text-xl font-semibold text-red-400 mb-2">Ocurrió un error, vuelve a intentar</h3>
                <p class="text-gray-400 mb-4">Algún error se detecto, vuelve a intentarlo más tarde</p>`;
                chat_container.appendChild(error_container);
        }
    }        
})