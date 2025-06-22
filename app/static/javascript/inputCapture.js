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

        console.log('Topic: ', data.topic, 'Question: ', data.question)

        call(data);
    })
    
    async function call(data) {
        const response = await fetch(`/search_info/${data.topic}/${data.question}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },            
        });

        console.log(response);
    }
})