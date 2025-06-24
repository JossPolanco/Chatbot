from fuzzywuzzy import process
from flask import Blueprint, jsonify
from app.models.chatbotQAModel import ChatbotQAModel

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
    best_coincidence_list = []
    # gets all the questions of a specific topic
    question_list = chatbotModel.get_questions(topic)
    
    # first check if the questions is 100% exact to the question in the db
    best_coincidence = process.extractOne(user_question, question_list)
    
    print('COINCIDENCIA DEL 100%: ', best_coincidence)  
    
    # check if the there is a coincidence and if the coincidence is of 100%
    if best_coincidence is not None and best_coincidence[1] == 100:
        pass
    else:
        # ckecks if there are coincidences and returns the mosts ones        
        best_coincidence_list = process.extract(user_question, question_list)
        print('NO COINCIDIO DEL TODO ASI QUE:: ')  
        print('LISTA DE COINCIDENCIAS: ', best_coincidence_list)  
        

    return jsonify({'coincidence': best_coincidence_list})
