import datetime as dt
from colorama import Fore, Style, init
from app.utils.db_utils import get_db, get_collection, print_document
class ChatbotQAModel():
    def __init__(self) -> None:
        self.db = get_db()
    
    def get_questions(self, topic):
        collection = get_collection(topic)
        # in the collection finds all documents but only including the question
        documents = collection.find({}, {'questions.question': 1})
        
        # list to storage the questions
        questions = []
        
        # Iterate each doc, and in each doc iterate each "questions" field and iterates each question in the "questions" field
        for doc in documents:                       
            for question in doc['questions']:
                if 'question' in question:
                    questions.append(question['question'])        
        
        ''' VISUAL EXAMPLE
        document { 
            questions: [
                {
                question: '¿Qué es una fracción?',
                },
            },
        '''
        
        return questions
    
    def get_questions_limited(self, topic, limit):
        collection = get_collection(topic)
        # in the collection finds all documents but only including the question
        documents = collection.find({}, {'questions.question': 1}).limit(limit)
        
        # list to storage the questions
        questions = []
        
        # Iterate each doc, and in each doc iterate each "questions" field and iterates each question in the "questions" field
        for doc in documents:                       
            for question in doc.get('questions', [])[:limit]:
                if 'question' in question:
                    questions.append(question['question'])        
        
        ''' VISUAL EXAMPLE
        document { 
            questions: [
                {
                question: '¿Qué es una fracción?',
                },
            },
        '''
        
        return questions
    
    def get_one_answer(self, topic, question):
        # gets all the collection
        collection = get_collection(topic)
        
        # pipeline to bring the specific information that we need
        pipeline = [
            {'$unwind': '$questions'},
            {'$match': {'questions.question': question[0]}},
            {'$project': {'id': 1, 'title': '$title', 'subtheme': '$subtheme', 'question': '$questions.question', 'answerd': '$questions.answerd', }}
        ]
        # do the aggregate with the pipeline and its converted to a list
        result = list(collection.aggregate(pipeline))
        
        # return the result
        if result:
            return result[0]
        else:
            return None

    def get_possible_answers(self, topic, questions):
        # gets all the collection
        collection = get_collection(topic)
        
        # list of all the possible answers to all possible questions
        result = []
        
        # pipeline to bring the specific information that we need
        for question in questions:
            pipeline = [
                {'$unwind': '$questions'},
                {'$match': {'questions.question': question[0]}},
                {'$project': {'id': 1, 'title': '$title', 'subtheme': '$subtheme', 'question': '$questions.question', 'answerd': '$questions.answerd', }}
            ]
            # do the aggregate with the pipeline and its converted to a list
            list_answers = list(collection.aggregate(pipeline))
            
            # append each result in the list
            result.append(list_answers)

        # return the result
        if result:
            return result
        else:
            return None
    
    def insert_history(self, answer):
        collection = get_collection('historial')
        
        current_date = dt.datetime.now()
        
        formatted_date = current_date.strftime("%Y-%m-%d %H:%M:%S")
        
        to_insert = {
            'Fecha': formatted_date,
            'Titulo': answer['title'],
            'Pregunta': answer['question'],
            'Respuesta': answer['answerd']
        }
        
        collection.insert_one(to_insert)