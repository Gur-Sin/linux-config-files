class Player():
    def __init__(self, given_name):
        self.__name = given_name
        self.__score = 0

    
class Card():
    def __init__(self, given_suit,given_value,given_rank):
        self.__suit = given_suit
        self.__rank = given_rank
        self.__value = given_value

class Deck():
    def __init__(self):
        self.__cards=[]
