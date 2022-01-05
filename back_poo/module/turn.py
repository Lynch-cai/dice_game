from helpers.utils import check_user_boolean_response
from constant import NB_DICE
from .roll import Roll


# Manage turn for single player
# -------- PARAMETERS --------
# player_name : TYPE = str | name of the player


class Turn:
    def __init__(self, player):
        self.player = player
        self.roll = Roll(self.player)
        self.win = False
        self.score = 0
        self.dices = NB_DICE
        self.roll_nb = 0
        self.potential_points_lost = 0
        self.bonus = {"full_roll": 0, "standard": 0}
        self.win = False

    def start(self):
        # Text to introduce the turn
        print(
            f"turn #{self.player.turn}--> {self.player.username} rank #{self.player.rank}, score {self.player.score}"
        )
        input("press any key to roll the dices ! ")

    def turn_manager(self):
        self.start()
        while self.dices > 0:
            # Generate random roll and get associated output
            self.roll.random_roll_generator(self.dices)

            # Update turn
            self.dices = self.roll.dices_left
            self.score += self.roll.score
            self.roll_nb = self.roll_nb + 1

            print(
                f"roll # {self.roll_nb} : scoring dices {self.roll.dices_matched} scoring {self.roll.score} potential total turn score {self.score} remaining dice to roll : {self.dices}"
            )

            self.roll_nb += 1
            if self.roll.score > 0:
                roll_again = check_user_boolean_response(
                    input('roll again ? [y/n]')
                )

                if not roll_again:
                    self.win = True
                    print(f"you win this turn, scoring {self.score} pts")
                    self.dices = 0
            else:
                print(
                    f"you lose this turn and a potential to score {self.score} pts"
                )
                self.win = False
                self.potential_points_lost = self.score
                self.score = 0
                self.dices = 0
