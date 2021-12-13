from random import randint


# Target total score to win by default
DEFAULT_TARGET_SCORE = 2000

# Number of dices by default in the set
DEFAULT_DICES_NB = 5
# Number of side of the dices used in the game
NB_DICE_SIDE = 6

# List of dice value scoring
LIST_SCORING_DICE_VALUE = [1, 5]
# List of associated score for scoring dice values
LIST_SCORING_MULTIPLIER = [100, 50]

# Trigger for multiple bonus
TRIGGER_OCCURRENCE_FOR_BONUS = 3
# Special bonus multiplier for multiple ace bonus
BONUS_VALUE_FOR_ACE_BONUS = 1000
# Standard multiplier for multiple dices value bonus
BONUS_VALUE_FOR_NORMAL_BONUS = 100

def listOccurency(nbDiceRoll):
    list = [0] * NB_DICE_SIDE
    roll = 0
    while roll < nbDiceRoll:
        dice = randint(1,NB_DICE_SIDE)
        list[dice - 1] += 1
        roll += 1
    print(list)
    return list

def score(Occurency):
    side = 0
    score = 0
    while side < NB_DICE_SIDE:
        if Occurency[side] >= 3:
            if side == 0:
                score += (side + 1) * BONUS_VALUE_FOR_ACE_BONUS
            else:
                score += (side + 1) * BONUS_VALUE_FOR_NORMAL_BONUS
        side += 1
        
    return score

if __name__ == "__main__":
    print(score(listOccurency(DEFAULT_DICES_NB)))
