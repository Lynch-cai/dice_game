from back.constant import (
    NB_DICE_SIDE,
    THRESHOLD_BONUS,
    ACE_BONUS_MULTIPLIER,
    STD_BONUS_MULTIPLIER,
    SCORING_DICE_VALUE_LIST,
    SCORING_MULTIPLIER_LIST,
    DEFAULT_TARGET_SCORE,
)

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


def score_winner_checker(players):
    print('win')
    return True

