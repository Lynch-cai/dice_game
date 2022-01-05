import random
from constant import (
    NB_DICE_SIDE,
    THRESHOLD_BONUS,
)
from .score import Score


# generate random roll dice & return output result
# -------- PARAMETERS --------
# nb_dices : TYPE = INT | number of dice per turn
# roll_output data structure : {
#   "score": roll dice score,
#   "dices_left": number of dices left after the roll,
#   "dices_match": Array of matched dices
# }


class Roll:
    def __init__(self, player):
        self.player = player
        self.score = 0
        self.dices_left = 0
        self.dices_matched = 0
        self.bonus = 0

    def random_roll_generator(self, dices_nb):

        # Generate roll occurrence
        roll_dice_occurrence = self.roll_dice_set(dices_nb)

        # Get matched dices : ex [1,5]
        dices_matched = self.get_dices_match(roll_dice_occurrence)

        # Get score from founded occurrence
        score = Score()
        analyse = score.analyse_score(roll_dice_occurrence)

        roll_score = analyse[0]

        # Get dices left for next roll
        dices_left = sum(analyse[1])

        # Get bonus
        bonus = analyse[2]

        self.score = roll_score
        self.dices_left = dices_left
        self.dices_matched = dices_matched
        self.bonus = bonus

    # Generate roll dice and return occurrence list
    # -------- PARAMETERS --------
    # nb_dice_to_roll : TYPE = Int | number of dice to roll per turn

    def roll_dice_set(self, nb_dice_to_roll):
        dice_value_occurrence_list = [0] * NB_DICE_SIDE
        for n in range(nb_dice_to_roll):
            dice_value = random.randint(1, NB_DICE_SIDE)
            dice_value_occurrence_list[dice_value - 1] += 1

        return dice_value_occurrence_list

    # xxxxxx
    # -------- PARAMETERS --------
    # dice_value_occurrence_list : TYPE =  | xxxxxx

    def get_dices_match(self, dice_value_occurrence_list):
        list_dices_match = []
        for side_value_index, dice_value_occurrence in enumerate(
            dice_value_occurrence_list
        ):
            if side_value_index == 0 and dice_value_occurrence > 0:
                list_dices_match.append(
                    [dice_value_occurrence, side_value_index + 1]
                )
            elif side_value_index == 4 and dice_value_occurrence > 0:
                list_dices_match.append(
                    [dice_value_occurrence, side_value_index + 1]
                )
            else:
                nb_dices_match = dice_value_occurrence // THRESHOLD_BONUS
                if nb_dices_match > 0:
                    list_dices_match.append(
                        [nb_dices_match * 3, side_value_index + 1]
                    )
        return list_dices_match
