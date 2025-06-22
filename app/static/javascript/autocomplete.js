const question_input = document.getElementById('question_input');
var awesomplete = new Awesomplete(question_input);
let topic = ''
let list_questions = []

document.addEventListener('DOMContentLoaded', async function () {
    // brings all the topics
    const topics = document.querySelectorAll('.topic');

    // to each topics listen when is clicked, when is clicked bring all the question related with that topic 
    topics.forEach(topicRa => {
        topicRa.addEventListener('change', async function() {
            topic = this.value
            // save all the questions of the topic
            list_questions = await get_questions(topic)            
            // set the questions to the autocomplete
            awesomplete.list = list_questions;
        })
    })
})

async function get_questions(topic) {
    const questions_autocomplete = await fetch(`/get-all-questions/${topic}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },        
    })

    const data = await questions_autocomplete.json();    
    
    return data.all_questions
}

