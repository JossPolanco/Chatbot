import os
from dotenv import load_dotenv
from pymongo import MongoClient

def db_init():
    load_dotenv()
    psw = os.environ.get('DB_PASSWORD')
    type_connection = os.environ.get('DB_TYPE_CONNECTION')
    
    match type_connection:
        case 'cloud':
            mongo_db = f"mongodb+srv://Josue:{psw}@cluster0.9jjvtkw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        case 'local':
            mongo_db = 'mongodb://localhost:27017/'
    
    mongo_client = MongoClient(mongo_db)
    
    return mongo_client 