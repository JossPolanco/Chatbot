import os
from flask import Flask
from dotenv import load_dotenv
from app.views import index_view
from app.models.model import ChatbotModel

def create_app():
    load_dotenv()
    
    app = Flask(__name__)
    
    # TESTING
    model = ChatbotModel()
    model.get_questions('matematicas')
    
    # register blueprints
    app.register_blueprint(index_view.bp)
    
    return app