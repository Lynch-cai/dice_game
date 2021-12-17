from back.helpers.utils import check_user_boolean_response
from ..constant import NB_DICE
from .roll import random_roll_generator

MAX_TURN_SCORING = {"name_player": "", "turn_score": 0}
LONGEST_TURNING = {"name_player": "", "nb_roll": 0}
MAX_TURN_LOSS = {"name_player": "", "turn_score": 0}
MEAN_SCORE_TURN = []
MEAN_NON_SCORE_TURN = []

# Manage turn for single player
# -------- PARAMETERS --------
# player_name : TYPE = str | name of the player

def turn_manager(player):

    turn = {
        "win": False,
        "score": 0,
        "dices": NB_DICE,
        "roll_nb": 0,
        "potential_points_lost": 0,
        "bonus": {"full_roll": 0, "standard": 0}
    }

    # Text to introduce turn
    print(f"turn #{player['turn']}--> {player['username']} rank #{player['rank']}, score {player['score']}")
    input("press any key to roll the dices ! ")

    while turn["dices"] > 0:
        # Generate random roll and get associated output
        roll_output = random_roll_generator(turn["dices"])
        print(roll_output)

        # Update dices number
        turn["dices"] = roll_output["dices_left"]

        # Update turn score
        turn["score"] += roll_output['score']

        print(roll_output)

        print(
            f"roll # {turn['roll_nb']} : scoring dices {roll_output['dices_matched']} scoring {roll_output['score']} potential total turn score {turn['score']} remaining dice to roll : {turn['dices']}"
        )

        if roll_output['score'] > 0:

            roll_again = check_user_boolean_response(input('roll again ? [y/n]'))

            if not roll_again:
                apply_max_turn_score(
                    name_player=player["username"], turn_score= turn["score"]
                )
                MEAN_SCORE_TURN.append(int(turn["dices"]))
                turn["win"] = True
                turn["roll_nb"] += 1
                print(f"you win this turn, scoring {turn['score']} pts")
                return turn
            else:
                turn["roll_nb"] += 1
        else:
            print(
                f"you lose this turn and a potential to score {turn['score']} pts"
            )
            apply_max_turn_loss(name_player=player["username"], turn_score= turn['score'])
            MEAN_NON_SCORE_TURN.append(turn["score"])
            turn_update = {'score': 0, 'win': False}
            turn.update(turn_update)
            return turn

    apply_longest_turn(name_player=player["username"], nb_roll= turn["roll_nb"])


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




