from app.database.db import db_init

def get_db():
    mongo_client = db_init()
    db = mongo_client.chatbot
    return db

def get_collection(collection_name):
    db = get_db()
    collection = db[collection_name]
    return collection