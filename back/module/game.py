from back.module.player import add_players
from back.helpers.utils import check_user_boolean_response
from back.module.score import analyse_score_winner
from back.module.turn import turn_manager

# Manage game of dice
# -------- PARAMETERS --------
# play_again : TYPE = Boolean | Restart new game directly when TRUE
# same_user : TYPE = Boolean | Restart the game with same user
# add_user : TYPE = Array | Array of the new users to add for the new game

def dice_game_manager(play_again):

    # Global game stats

    game_stat = {
        "max_turn_scoring": 0,
        "longest_turn": 0,
        "max_turn_loss": 0,
        "mean_scoring_turn": 0,
        "mean_non_scoring_turn": 0,
        "game_running": False
    }

    # Initializing the game

    if not play_again:
        new_game = check_user_boolean_response(
            input('Hello & Welcome to the Hetic dice game tournment ! \nDo you want to start a new game ? [y/n]')
        )
    else:
        new_game = True

    if new_game:

        # Init players (see player module for more info about players structure)
        players = add_players()

        # Start Main game loop
        print("Let's begin the game !")
        game_running = True

        while game_running:

            for player in players:

                # Manage player turn then return results
                turn_result = turn_manager(player)
                print("result",turn_result)

                # TODO Update full player's information
                print(player)
                player.update({
                    "score": turn_result["score"],
                    "roll_nb": turn_result[""]

                })
                turn = {
                    "win": False,
                    "score": 0,
                    "dices": NB_DICE,
                    "roll_nb": 0,
                    "potential_points_lost": 0,
                    "bonus": {"full_roll": 0, "standard": 0}
                }
                # Print total scores for each players
                total_score = "total score : "
                for player in players:
                    total_score += player["username"] + '-->' + str(player["score"]) + ' '
                print(total_score)

                # TODO Update game stats

                # TODO Check & update players rank

                # Check for winner after every turn

                print(analyse_score_winner(players))
                if analyse_score_winner(players):
                    game_running = False

                    # Return game's winner and players stats to print
                    # print(game_winner_printer)

                    print("Someone win ! Game in 6 turn")

                    # Game restart

                    new_game = check_user_boolean_response(input('Do you want to play again ? [y/n]'))

                    if new_game:
                        return dice_game_manager(True)
                    else:
                        print('Good by see you next time')
    else:
        print('Good by see you next time')



