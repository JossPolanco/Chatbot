document.addEventListener('DOMContentLoaded', function () {
    // gets all the elements needed
    const send_btn = document.getElementById('send_btn');
    const question_input = document.getElementById('question_input');
    const history_btn = document.getElementById('history_btn')
    let topic = '';
    
    send_btn.addEventListener('click', function() {
        // save the string that was made by the user
        let questionToSearch = question_input.value;
        // save the topic selected
        const topicSelected = document.querySelector('.topic:checked');

        if(topicSelected){
            topic = topicSelected.value            
        } else {
            alert('Un tema debe estar seleccionado')
        }

        // create an object with the info
        let data = {
            'topic': topic,
            'question': questionToSearch
        }

        // call to get the result
        getResponse(data).then(result => {
            // send the question that was made by the user and the response of the chatbot to be drawn
            drawConversation(questionToSearch, result)
        })
    });

    // redirect to the page of the history
    history_btn.addEventListener('click', function() {        
        window.location.href = `/history_view`
    });


    async function getResponse(data) {
        let response = await fetch(`/search_info/${data.topic}/${data.question}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },            
        });
        // wait to the response and it's converted to json
        let result = await response.json()

        // return the response
        return result
    }

    // function to draw all the conversation
    function drawConversation(questionToSearch, result){
        try {
            // gets and create all the elements needed
            const chat_container = document.getElementById('chat_container');
            const question = document.createElement('div')
            // default phrases
            const init_phrase = ['No encontre exactamente lo que buscas, pero aqui tienes algunos temas relacionados:<br><br>', 'No encontré una coincidencia exacta para tu pregunta, pero aquí tienes algunas respuestas relacionadas que podrían ayudarte:<br><br>', 'No logré encontrar una respuesta exacta, pero estas opciones podrían ser útiles para ti:<br><br>', 'No tengo una respuesta exacta sobre lo que buscas, pero encontré información relacionada que podría interesarte:<br><br>', 'No pude hallar una coincidencia perfecta, pero aquí tienes algunas preguntas y respuestas similares:<br><br>']
            const not_answer_phrases = ['Ayuda, soy una persona encerrada en el sótano de Josue, me está obligando a escribir esto, ayuda por favor, no he comido en 7 dias me estoy muriendo', 'Nambre no, ahí muere.', 'Si Dios no sabe, menos yo.', 'No te entendí, escribe bien.', 'No encontré coincidencias sobre lo que estás buscando.', 'Nono papito, ahí la dejamos.', 'Sepa que quieres.']

            question.className = 'flex justify-end mb-4 items-center gap-3'

            question.innerHTML = `
            <div class="">
                <div class="bg-gradient-to-l from-cyan-600 to-blue-600 text-white rounded-2xl px-4 py-2 max-w-xl shadow">${questionToSearch}</div>
            </div>
            <div class="flex size-15 bg-white border-2 border-gray-300 justify-center items-center rounded-full">
                <i class="fa-solid fa-user fa-2xl" style="color: #2e5fb2;"></i>
            </div>`

            chat_container.appendChild(question)

            // checks if the response was successfully
            if(result.status == 200){
                const answer = document.createElement('div')
                // if there is an unique answer
                if(result.mode == 'unique'){

                    answer.className = 'flex justify-start mb-4 items gap-3'

                    // conversation by the bot
                    answer.innerHTML = `
                    <div class="flex size-15 bg-white border-2 border-gray-300 justify-center items-center rounded-full">                    
                        <i class="fa-solid fa-robot fa-2xl" style="color: #2e5fb2;"></i>
                    </div>
                    <div class="">
                        <div class="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl px-4 py-2 max-w-xl shadow">${result.answer}</div>
                    </div>
                    `

                    chat_container.appendChild(answer);

                    // if there is more than a unique answer                
                } else if(result.mode == 'multiple'){                
                    let full_response = ''
                    // gets a random number of the length if the defaulr phrases
                    let randomIndex = Math.floor(Math.random() * init_phrase.length);
                    let phrase = init_phrase[randomIndex];
                    
                    for (let i = 0; i < result.questions.length; i++) {
                        full_response += `<strong class="text-yellow-400">${result.questions[i]}</strong><br>`;
                        full_response += `${result.answers[i]}<br><br>`;
                    }
                    
                    let final_response = phrase + full_response

                    answer.className = 'flex justify-start mb-4 items gap-3'

                    // conversation by the bot
                    answer.innerHTML = `
                    <div class="flex size-15 bg-white border-2 border-gray-300 justify-center items-center rounded-full">
                        <i class="fa-solid fa-robot fa-2xl" style="color: #2e5fb2;"></i>                    
                    </div>
                    <div class="">
                        <div class="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl px-4 py-2 max-w-md shadow">${final_response}</div>
                    </div>`
                    chat_container.appendChild(answer);
                }
                // if there was a problem
            } else if(result.status == 404){
                const answer = document.createElement('div')

                // gets a random number of the length if the defaulr phrases
                let randomIndex = Math.floor(Math.random() * init_phrase.length);
                let phrase = not_answer_phrases[randomIndex];

                answer.className = 'flex justify-start mb-4 items gap-3'

                // conversation by the bot
                answer.innerHTML = `
                <div class="flex size-15 bg-white border-2 border-gray-300 justify-center items-center rounded-full">                    
                    <i class="fa-solid fa-robot fa-2xl" style="color: #2e5fb2;"></i>
                </div>
                <div class="">
                    <div class="bg-indigo-400 text-white rounded-2xl px-4 py-2 max-w-md shadow">${phrase}</div>
                </div>
                `
                chat_container.appendChild(answer);
            }
            chat_container.scrollTop = chat_container.scrollHeight;
        } catch (error) {
            const error_container = document.createElement('div');
            error_container.className = 'flex flex-col items-center justify-center py-12 text-center';
            error_container.innerHTML = `
            <div class="text-6xl mb-4">⚠️</div>
            <h3 class="text-xl font-semibold text-red-400 mb-2">Error al cargar el historial</h3>
            <p class="text-gray-400 mb-4">No se pudo obtener el historial de conversaciones</p>`;
            chat_container.appendChild(error_container);
        }        
    }
})