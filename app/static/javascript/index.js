document.addEventListener('DOMContentLoaded', function () {
    const send_btn = document.getElementById('send_btn');
    const question_input = document.getElementById('question_input');
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
    })
    
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

        question.className = ''

        question.innerHTML = `
        <div class="">
            <div class="bg-blue-400 max-w-md p-3 rounded-2xl justify-self-end">${questionToSearch}</div>
        </div>`

            chat_container.appendChild(question)

        if(result.status == 200){
            const answer = document.createElement('div')
            if(result.mode == 'unique'){

                answer.className = ''

                answer.innerHTML = `
                <div class="">
                    <div class="bg-purple-400 justify-start max-w-md p-3 rounded-2xl">${result.answer}</div>
                </div>`

                chat_container.appendChild(answer);
            } else if(result.mode == 'multiple'){
                let init_phrase = 'No encontre exactamente lo que buscas, pero aqui tienes algunos temas relacionados:<br><br>'
                let full_response = ''
                for (let i = 0; i < result.questions.length; i++) {
                    full_response += `<strong>Pregunta:</strong> ${result.questions[i]}<br>`;
                    full_response += `<strong>Respuesta:</strong> ${result.answers[i]}<br><br>`;
                }

                let final_response = init_phrase + full_response

                answer.className = ''

                answer.innerHTML = `
                <div class="">
                    <div class="bg-purple-400 justify-start max-w-md p-3 rounded-2xl">${final_response}</div>
                </div>`
                chat_container.appendChild(answer);
            }
        }
    }
})