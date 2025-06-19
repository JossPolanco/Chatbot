import os
from flask import Flask
from dotenv import load_dotenv
from app.views import index_view

def create_app():
    load_dotenv()
    
    app = Flask(__name__)
    
    # register blueprints
    app.register_blueprint(index_view.bp)
    
    return app