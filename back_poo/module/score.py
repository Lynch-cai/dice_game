from constant import (
    THRESHOLD_BONUS,
    ACE_BONUS_MULTIPLIER,
    STD_BONUS_MULTIPLIER,
    SCORING_DICE_VALUE_LIST,
    SCORING_MULTIPLIER_LIST,
    DEFAULT_TARGET_SCORE,
)

# xxxxxx
# -------- PARAMETERS --------
# dice_value_occurrence_list : TYPE =  | xxxxxx


class Score:
    def __init__(self):
        self.bonus = {"full_roll": 0, "standard": 0}
        self.score = 0

    def analyse_bonus_score(self, dice_value_occurrence_list):

        for side_value_index, dice_value_occurrence in enumerate(
            dice_value_occurrence_list
        ):
            nb_of_bonus = dice_value_occurrence // THRESHOLD_BONUS
            if nb_of_bonus > 0:

                if side_value_index == 0:
                    bonus_multiplier = ACE_BONUS_MULTIPLIER
                    self.bonus["full_roll"] += 1
                else:
                    bonus_multiplier = STD_BONUS_MULTIPLIER
                    self.bonus["standard"] += 1
                self.score += (
                    nb_of_bonus * bonus_multiplier * (side_value_index + 1)
                )
                dice_value_occurrence_list[side_value_index] %= THRESHOLD_BONUS

        return self.score, dice_value_occurrence_list, self.bonus

    # xxxxxx
    # -------- PARAMETERS --------
    # dice_value_occurrence_list : TYPE =  | xxxxxx

    def analyse_standard_score(self, dice_value_occurrence_list):
        for scoring_value, scoring_multiplier in zip(
            SCORING_DICE_VALUE_LIST, SCORING_MULTIPLIER_LIST
        ):
            self.score += (
                dice_value_occurrence_list[scoring_value - 1]
                * scoring_multiplier
            )

            dice_value_occurrence_list[scoring_value - 1] = 0

        return self.score, dice_value_occurrence_list

    # xxxxxx
    # -------- PARAMETERS --------
    # dice_value_occurrence_list : TYPE =  | xxxxxx

    def analyse_score(self, dice_value_occurrence_list):
        (
            bonus_score,
            dice_value_occurrence_list,
            bonus,
        ) = self.analyse_bonus_score(dice_value_occurrence_list)

        (
            standard_score,
            dice_value_occurrence_list,
        ) = self.analyse_standard_score(dice_value_occurrence_list)
        return bonus_score + standard_score, dice_value_occurrence_list, bonus
