from app.database.db import db_init
import pprint

# instantiates the class to handle pretty printing
printer = pprint.PrettyPrinter()

# function that gets the db
def get_db():
    mongo_client = db_init()
    db = mongo_client.chatbot
    return db

# function that return a collection by passing the name of the collection
def get_collection(collection_name):
    db = get_db()
    collection = db[collection_name]    
    return collection

# function that prints the information in a more readable way
def print_document(document):
    for doc in document:
        printer.pprint(doc)