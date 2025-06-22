from flask import Blueprint, jsonify
from app.models.chatbotQAModel import ChatbotQAModel
from app.utils.coincidende_cheker import check_coincidences, check_one_coincidece

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
    # gets all the questions of a specific topic
    questions = chatbotModel.get_questions(topic)
    # ckecks if there are coincidences and returns the mosts ones
    topic_questions = check_coincidences(user_question, questions)
    
    print(topic_questions)

    return jsonify({'coincidence': topic_questions})
