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
    
    def find_answerd(self, topic):
        collection = get_collection(topic)
        documents = collection.find().limit(2)
        
        # print_document(documents)
    