from fuzzywuzzy import process
from flask import Blueprint, jsonify
from colorama import Fore, Style, init
from app.models.chatbotQAModel import ChatbotQAModel

init(autoreset=True)
bp = Blueprint('search_info_route', __name__)

# list of all the topics
topics = ['anatomia', 'artes', 'astronomia', 'automoviles', 'biologia', 'cultura_friky', 'deportes', 'filosofia', 'geografia', 'historia', 'matematicas', 'programacion', 'tecnologia']

chatbotModel = ChatbotQAModel()

@bp.route('/get-all-questions/<string:topic>', methods=['POST'])
def get_all_questions(topic):    
    # gest all the questions related of the topic
    obtained_questions = chatbotModel.get_questions(topic)
    # return a json with the questions
    return jsonify({'all_questions': obtained_questions})


@bp.route("/search_info/<string:topic>/<string:user_question>", methods=["POST"])
def search_info(topic, user_question):
    question_list_response = []
    best_coincidence_list = []
    answer_list_response = []
    final_questions = []
    
    # gets all the questions of a specific topic
    question_list = chatbotModel.get_questions(topic)
    
    # first check if the questions is 100% exact to the question in the db
    best_coincidence = process.extractOne(user_question, question_list)
    
    # check if the there is a coincidence and if the coincidence is of 100%
    if best_coincidence is not None and best_coincidence[1] == 100:
        # gets the answer
        answer = chatbotModel.get_one_answer(topic, best_coincidence)
        
        if answer:
            # insert the answer in the history collection
            chatbotModel.insert_history(answer)
            
            # return a json with the answer
            return jsonify({'status': 200, 'mode': 'unique', 'answer': answer['answerd']})
        else:
            # return a json with a error code
            return jsonify({'status': 404})
    else:
        # ckecks if there are coincidences and returns the mosts ones        
        best_coincidence_list = process.extract(user_question, question_list)
        
        # ensure that coincidences are higher than the 80%
        for coincidence in best_coincidence_list:
            if coincidence[1] >= 80:
                final_questions.append(coincidence[0])
        
        if not final_questions:
            return jsonify({'status': 404})
        
        # gets all possible answers
        answers = chatbotModel.get_possible_answers(topic, best_coincidence_list)
        
        print(f'{Fore.RED}Las respuestas son: ', answers)
        
        # if there is answers, save each question and answers separated
        if answers:
            for answer in answers:
                # save each question
                question_list_response.append(answer[0]['question'])
                # save each answer
                answer_list_response.append( answer[0]['answerd'])
            
            # return a json with all the possible answers
            return jsonify({'status': 200 , 'mode': 'multiple', 'questions': question_list_response, 'answers': answer_list_response})
        else:
            # return a json with a error code
            return jsonify({'status': 404})

# @bp.route('/get-history', methods=['POST'])
# def get_history():
#     pass
