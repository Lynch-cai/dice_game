import random
from back.utils.score_utils import analyse_score
from ..constant import (
    NB_DICE_SIDE,
    THRESHOLD_BONUS,
)

def player_turn_generator():
    play = True
    nb_dices = 5
    turn_score = 0

    while play:
        roll_dice = roll_dice_set(nb_dices)
        dices_match = get_dices_match(roll_dice)
        analyse = analyse_score(roll_dice)
        score = analyse[0]
        turn_score += score
        nb_dices = sum(analyse[1])
        print(
            f"scoring dices {dices_match} scoring {score} potential total turn score {turn_score} remaining dice to roll : {nb_dices}"
        )
        if score > 0:
            resp_user = input("[y/n]?")
            if resp_user == "n":
                play = False
                return score,roll_dice
        else:
            print(
                f"you lose this turn and a potential to score {turn_score} pts"
            )
            turn_score = 0
            play = False
            return score, roll_dice




# Generate roll dice and return occurence list
# nb_dice_to_roll : number of dice per turn

def roll_dice_set(nb_dice_to_roll):
    dice_value_occurrence_list = [0] * NB_DICE_SIDE
    for n in range(nb_dice_to_roll):
        dice_value = random.randint(1, NB_DICE_SIDE)
        dice_value_occurrence_list[dice_value - 1] += 1

    return dice_value_occurrence_list


def get_dices_match(dice_value_occurrence_list):
    list_dices_match = []
    for side_value_index, dice_value_occurrence in enumerate(
        dice_value_occurrence_list
    ):
        if side_value_index == 0 and dice_value_occurrence >= 1:
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
