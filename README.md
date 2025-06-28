# Aplicación web de chatbot

## Project Description

This project is an interactive chatbot web application designed to answer questions on a variety of topics, such as science, history, sports, and more. Users can type in their questions, and the chatbot will search its database to provide the most relevant answers. If an exact answer isn’t found, the chatbot suggests similar questions and their answers to help users find the information they need. The application also keeps a history of previous questions and answers, making it easy to review past conversations. 

## Technologies Used

- **Backend**: Python (Flask) 
- **Frontend**: HTML, CSS (Tailwind), JavaScript 
- **Libraries**: Awesomplete 
- **Database**: Non-relational database (MongoDB)

## API Endpoints
### Available topics: 
anatomia', 'artes', 'astronomia', 'automoviles', 'biologia', 'cultura_friky', 'deportes', 'filosofia', 'geografia', 'historia', 'matematicas', 'programacion', 'tecnologia'

### GET `/get-all-questions/<topic>` 
**Method:** GET

**Description:** Returns all questions related to the specified topic as a JSON response.

**Parameters:** 
- `topic` (string): The topic from which the questions are to be obtained

Please provide the text you would like me to translate.

### POST `/search_info/<topic>/<user_question>` 
**Method:** POST 

**Description:** Look for the best answer that matches the user's question within the specified topic.

**Parameters:** 
- `topic` (string): The topic to search for 
- `user_question` (string): The user's question

**Behavior:** 
- If an exact match is found, return the unique response. 
- If similar questions are found (with at least 80% similarity), return a list of possible questions and their answers. 
- If no relevant questions are found, return a 404 status

Please provide the text you would like me to translate.

### GET `/get-history` 
**Method:** GET

**Description:** Returns the chat history as a JSON response.
