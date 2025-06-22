import os
from flask import Flask
from dotenv import load_dotenv
from app.views import index_view
from app.routes import search_info_route

def create_app():
    load_dotenv()
    
    app = Flask(__name__)   
    
    # register blueprints
    app.register_blueprint(index_view.bp)
    app.register_blueprint(search_info_route.bp)
    
    return app