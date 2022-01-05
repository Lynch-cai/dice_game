from helpers.utils import check_user_boolean_response

from module.player import Player
from module.turn import Turn
from module.stats import Stats
from constant import DEFAULT_TARGET_SCORE


class Game:
    def __init__(self):
        self.running = True
        self.list_player = []
        self.stat = Stats()

    def add_player(self, player_id):
        """
        Add all players
        """
        player_username = input(f"Player {player_id} ! What's your name ?")
        player = Player(id=player_id, username=player_username)
        self.list_player.append(player)

    def display_all_scores_player(self):
        """
        At the end of the turn, display all scores of the players
        """
        total_score = "total score : "
        for player in self.list_player:
            total_score += player.username + '-->' + str(player.score) + ' '
        print(total_score)

    def analyse_score_winner(self):
        # Check if any player reached DEFAULT_TARGET_SCORE
        # -------- PARAMETERS --------
        # players : TYPE = array of dict| array of players
        for player in self.list_player:
            if player.score > 400:
                return True
            else:
                False

    def update_rank(self, player):
        list_player = self.list_player
        list_player.sort(key=lambda player: player.score, reverse=True)
        rank = list_player.index(player)
        return rank + 1

    def start_game(self):
        add_player = True
        player_id = 1

        print('Hello & Welcome to the Hetic dice game tournment !')

        while add_player:
            new_player = check_user_boolean_response(
                input(f"New player ? [y/n]")
            )
            if new_player:
                self.add_player(player_id)
                player_id += 1

            else:
                add_player = False

        # Start Main game loop
        print("Let's begin the game !")

    def dice_game_manager(self):

        """
        Manage game of dice
        -------- PARAMETERS --------
        play_again : TYPE = Boolean | Restart new game directly when TRUE
        same_user : TYPE = Boolean | Restart the game with same user
        add_user : TYPE = Array | Array of the new users to add for the new game
        """
        self.start_game()
        while self.running:
            for player in self.list_player:
                turn = Turn(player)
                turn.turn_manager()
                rank_player = self.update_rank(player)
                player.update(
                    score=turn.score,
                    potential_points_lost=turn.potential_points_lost,
                    roll_nb=turn.roll_nb,
                    bonus=turn.bonus,
                    rank=rank_player,
                )

                self.stat.apply_statistic_turn(
                    username=player.username,
                    score=turn.score,
                    turn=turn.roll_nb,
                    loss=turn.potential_points_lost,
                )
                self.display_all_scores_player()
                winner = self.analyse_score_winner()
                if winner:

                    # Return game's winner and players stats to print
                    # print(game_winner_printer)

                    print(f"Someone win ! Game in {player.turn} turn")
                    self.stat.display_stat()

                    # Game restart
                    self.list_player = []
                    print('Good by see you next time')
                    self.running = False
                    break
