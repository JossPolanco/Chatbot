import os
from dotenv import load_dotenv
from pymongo import MongoClient

def db_init():
    psw = os.environ.get('DB_PASSWORD')
    mongo_db = f"mongodb+srv://Josue:{psw}@cluster0.9jjvtkw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    
    mongo_client = MongoClient(mongo_db)
    
    return mongo_client