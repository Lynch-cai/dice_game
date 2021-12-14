import random
from back.module.score import analyse_score
from ..constant import (
    NB_DICE_SIDE,
    THRESHOLD_BONUS,
)

MAX_TURN_SCORING = {"name_player": "", "turn_score": 0}
LONGEST_TURNING = {"name_player": "", "nb_roll": 0}
MAX_TURN_LOSS = {"name_player": "", "turn_score": 0}
MEAN_SCORE_TURN = []
MEAN_NON_SCORE_TURN = []

def turn_generator(player_name):
    global MEAN_SCORE_TURN, MEAN_NON_SCORE_TURN
    play = True
    nb_dices = 5
    turn_score = 0
    nb_roll = 0

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
                apply_max_turn_score(
                    name_player=player_name, turn_score=turn_score
                )
                MEAN_SCORE_TURN.append(int(turn_score))
                play = False
                return score, roll_dice
            else:
                nb_roll += 1
        else:
            print(
                f"you lose this turn and a potential to score {turn_score} pts"
            )
            apply_max_turn_loss(name_player=player_name, turn_score=turn_score)
            MEAN_NON_SCORE_TURN.append(turn_score)
            turn_score = 0
            play = False
            return score, roll_dice

    apply_longest_turn(name_player=player_name, nb_roll=nb_roll)





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


def apply_max_turn_loss(name_player, turn_score):
    global MAX_TURN_LOSS
    if turn_score > MAX_TURN_LOSS["turn_score"]:
        MAX_TURN_LOSS = {
            "name_player": name_player,
            "turn_score": turn_score,
        }


def apply_max_turn_score(name_player, turn_score):
    global MAX_TURN_SCORING
    if turn_score > MAX_TURN_SCORING["turn_score"]:
        MAX_TURN_SCORING = {
            "name_player": name_player,
            "turn_score": turn_score,
        }


def apply_longest_turn(name_player, nb_roll):
    global LONGEST_TURNING
    if nb_roll > LONGEST_TURNING["nb_roll"]:
        LONGEST_TURNING = {
            "name_player": name_player,
            "nb_roll": nb_roll,
        }


def calcul_means(list_mean):
    if len(list_mean) > 0:
        mean = stat.mean(list_mean)
        return mean