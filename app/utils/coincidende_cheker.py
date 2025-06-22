from fuzzywuzzy import process

def check_one_coincidece(user_question, question_list):
    # extract only one coincidence, the question that has the best coincidence
    best_coincidence = process.extractOne(user_question, question_list)
    print('Best coincidence ', best_coincidence)
    return best_coincidence
    
def check_coincidences(user_question, question_list):
    # extract a list of the best coincidences of two strings
    best_coincidence_list = process.extract(user_question, question_list)
    print('Best coincidences ', best_coincidence_list)
    return best_coincidence_list