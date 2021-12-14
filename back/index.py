import random
from constant import (
    NB_DICE_SIDE,
    THRESHOLD_BONUS,
    ACE_BONUS_MULTIPLIER,
    STD_BONUS_MULTIPLIER,
    SCORING_DICE_VALUE_LIST,
    SCORING_MULTIPLIER_LIST,
    DEFAULT_TARGET_SCORE,
)


def roll_dice_set(nb_dice_to_roll):
    dice_value_occurrence_list = [0] * NB_DICE_SIDE
    for n in range(nb_dice_to_roll):
        dice_value = random.randint(1, NB_DICE_SIDE)
        dice_value_occurrence_list[dice_value - 1] += 1

    return dice_value_occurrence_list


def analyse_bonus_score(dice_value_occurrence_list):
    score = 0
    for side_value_index, dice_value_occurrence in enumerate(
        dice_value_occurrence_list
    ):
        nb_of_bonus = dice_value_occurrence // THRESHOLD_BONUS
        if nb_of_bonus > 0:

            if side_value_index == 0:
                bonus_multiplier = ACE_BONUS_MULTIPLIER
            else:
                bonus_multiplier = STD_BONUS_MULTIPLIER
            score += nb_of_bonus * bonus_multiplier * (side_value_index + 1)
            dice_value_occurrence_list[side_value_index] %= THRESHOLD_BONUS

    return score, dice_value_occurrence_list


def analyse_standard_score(dice_value_occurrence_list):
    score = 0
    for scoring_value, scoring_multiplier in zip(
        SCORING_DICE_VALUE_LIST, SCORING_MULTIPLIER_LIST
    ):
        score += (
            dice_value_occurrence_list[scoring_value - 1] * scoring_multiplier
        )

        dice_value_occurrence_list[scoring_value - 1] = 0

    return score, dice_value_occurrence_list


def analyse_score(dice_value_occurrence_list):
    bonus_score, dice_value_occurrence_list = analyse_bonus_score(
        dice_value_occurrence_list
    )
    standard_score, dice_value_occurrence_list = analyse_standard_score(
        dice_value_occurrence_list
    )

    return bonus_score + standard_score, dice_value_occurrence_list


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


def turn_result():
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
        else:
            print(
                f"you lose this turn and a potential to score {turn_score} pts"
            )
            turn_score = 0
            play = False


def gaming():
    play = True
    while play:
        pass
