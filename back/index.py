from back.module.player import add_players
from back.utils import check_user_boolean_response
from back.module.score import score_winner_checker
from back.module.turn import turn_generator


def dice_game_launcher(play_again):

    # Global game variable

    max_turn_scoring = 0
    longuest_turn = 0
    max_turn_loss = 0
    mean_scoring_turn = 0
    mean_non_scoring_turn = 0
    game_running = False

    # Initializing the game
    if play_again == True:
        new_game = True
    else:
        new_game = check_user_boolean_response(input('Hello & Welcome to the Hetic dice game tournment ! \nDo you want to start a new game ? [y/n]'))

    if new_game:

        # Add players
        players = add_players()

        # Start Main game loop
        print("Let's begin the game !")
        game_running = True
        while game_running:
            player_turn_info = turn_generator(players[0])

            winner = score_winner_checker(players)

            if winner:
                game_running = False
                print("Someone win ! Game in 6 turn")
                new_game = check_user_boolean_response(input('Do you want to again ? [y/n]'))

                if new_game:
                    return dice_game_launcher(True)
                else:
                    print('Good by see you next time')



    else:
        print('Good by see you next time')









