from flask import Blueprint, jsonify
from app.models.chatbotQAModel import ChatbotQAModel
from app.utils.coincidende_cheker import check_coincidences, check_one_coincidece

bp = Blueprint('search_info_route', __name__)

chatbotModel = ChatbotQAModel()

@bp.route("/search_info/<string:topic>/<string:user_question>", methods=["POST"])
def search_info(topic, user_question):
    questions = chatbotModel.get_questions(topic)
    
    pepe = check_coincidences(user_question, questions)
    
    print(pepe)
    
    return jsonify({'coincidence': pepe})
