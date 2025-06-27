document.addEventListener('DOMContentLoaded', function () {
    const send_btn = document.getElementById('send_btn');
    const question_input = document.getElementById('question_input');
    const history_btn = document.getElementById('history_btn')
    let topic = '';
    
    send_btn.addEventListener('click', function() {
        let questionToSearch = question_input.value;
        const topicSelected = document.querySelector('.topic:checked');
        console.log(topicSelected)

        if(topicSelected){
            topic = topicSelected.value            
        } else {
            alert('Un tema debe estar seleccionado')
        }

        let data = {
            'topic': topic,
            'question': questionToSearch
        }

        getResponse(data).then(result => {
            drawConversation(questionToSearch, result)
        })
    });

    history_btn.addEventListener('click', function() {
        getHistory().then(history => {
            drawHistory(history);
        })
    });
    
    async function getHistory(){
        let response = await fetch(`/get-history`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        let history = await response.json();

        console.log('HISTORIAL', history);

        return history
    }

    async function getResponse(data) {
        let response = await fetch(`/search_info/${data.topic}/${data.question}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },            
        });

        let result = await response.json()
        console.log(result)


        return result
    }

    function drawConversation(questionToSearch, result){
        const chat_container = document.getElementById('chat_container');
        const question = document.createElement('div')
        const init_phrase = ['No encontre exactamente lo que buscas, pero aqui tienes algunos temas relacionados:<br><br>', 'No encontré una coincidencia exacta para tu pregunta, pero aquí tienes algunas respuestas relacionadas que podrían ayudarte:<br><br>', 'No logré encontrar una respuesta exacta, pero estas opciones podrían ser útiles para ti:<br><br>', 'No tengo una respuesta exacta, pero encontré información relacionada que podría interesarte:<br><br>', 'No pude hallar una coincidencia perfecta, pero aquí tienes algunas preguntas y respuestas similares:<br><br>']
        const not_answer_phrases = ['Nambre no, ahí muere.', 'Si Dios no sabe, menos yo.', 'No te entendí, escribe bien.', 'No encontré coincidencias sobre lo que estás buscando.', 'Nono papito, ahí la dejamos.', 'Sepa que quieres.']

        question.className = 'flex justify-end mb-4 items-center gap-3'

        question.innerHTML = `
        <div class="">
            <div class="bg-blue-500 text-white rounded-2xl px-4 py-2 max-w-md shadow">${questionToSearch}</div>
        </div>
        <div class="flex size-15 bg-white border-2 border-gray-300 justify-center items-center rounded-full">
            <i class="fa-solid fa-user fa-2xl" style="color: #2e5fb2;"></i>
        </div>`

        chat_container.appendChild(question)

        if(result.status == 200){
            const answer = document.createElement('div')
            if(result.mode == 'unique'){

                answer.className = 'flex justify-start mb-4 items gap-3'

                answer.innerHTML = `
                <div class="flex size-15 bg-white border-2 border-gray-300 justify-center items-center rounded-full">                    
                    <i class="fa-solid fa-robot fa-2xl" style="color: #2e5fb2;"></i>
                </div>
                <div class="">
                    <div class="bg-indigo-400 text-white rounded-2xl px-4 py-2 max-w-md shadow">${result.answer}</div>
                </div>
                `

                chat_container.appendChild(answer);
            } else if(result.mode == 'multiple'){                
                let full_response = ''
                let randomIndex = Math.floor(Math.random() * init_phrase.length);
                let phrase = init_phrase[randomIndex];
                
                for (let i = 0; i < result.questions.length; i++) {
                    full_response += `<strong>${result.questions[i]}</strong><br>`;
                    full_response += `${result.answers[i]}<br><br>`;
                }

                let final_response = phrase + full_response

                answer.className = 'flex justify-start mb-4 items gap-3'

                answer.innerHTML = `
                <div class="flex size-15 bg-white border-2 border-gray-300 justify-center items-center rounded-full">
                    <i class="fa-solid fa-robot fa-2xl" style="color: #2e5fb2;"></i>                    
                </div>
                <div class="">
                    <div class="bg-indigo-400 text-white rounded-2xl px-4 py-2 max-w-md shadow">${final_response}</div>
                </div>`
                chat_container.appendChild(answer);
            }
        } else if(result.status == 404){
            const answer = document.createElement('div')

            let randomIndex = Math.floor(Math.random() * init_phrase.length);
            let phrase = not_answer_phrases[randomIndex];

            answer.className = 'flex justify-start mb-4 items gap-3'

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
    }

    function drawHistory(history){
        const chat_container = document.getElementById('chat_container');
        chat_container.innerHTML = ``

        const history_container = document.createElement('div');

        history_container.className = 'flex justify-start mb-4 items gap-3'

        history_container.innerHTML = `
            <div class="">
                <div class="bg-indigo-400 text-white rounded-2xl px-4 py-2 max-w-md shadow">MY HISTORIAL</div>
            </div>
            `
        chat_container.appendChild(history_container);
    }
})