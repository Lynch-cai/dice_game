import statistics as stat


class Stats:
    def __init__(self):
        self.max_turn_scoring = {"username": "", "score": 0}
        self.longest_turn = {"username": "", "turn": 0}
        self.max_turn_loss = {"username": "", "score": 0}
        self.mean_scoring_turn = []
        self.mean_non_scoring_turn = []
        self.game_running = False

    def apply_statistic_turn(self, username, score, loss, turn):
        """
        Check if the player's value is higher than the old one.
        if yes, update the statistics dictionnary
        """
        self.mean_scoring_turn.append(score)
        self.mean_non_scoring_turn.append(loss)

        if self.max_turn_loss["score"] < loss:
            self.max_turn_loss = {"username": username, "score": loss}

        if self.max_turn_scoring["score"] < score:
            self.max_turn_scoring = {"username": username, "score": score}

        if self.longest_turn["turn"] < turn:
            self.longest_turn = {"username": username, "turn": turn}

    def calcul_means(self, list_mean):
        """
        Check if the player's value is higher than the old one.
        if yes, update the statistics dictionnary
        """
        if len(list_mean) > 0:
            mean = stat.mean(list_mean)
            return mean

    def display_stat(self):
        mean_score = self.calcul_means(self.mean_scoring_turn)
        mean_non_score = self.calcul_means(self.mean_non_scoring_turn)
        print(
            f"Max turn scoring : {self.max_turn_scoring['username']} with {self.max_turn_scoring['score']}"
        )
        print(
            f"Max turn loss : {self.max_turn_loss['username']} with {self.max_turn_loss['score']}"
        )
        print(
            f"Longest turn : {self.longest_turn['username']} with {self.longest_turn['turn']} roll"
        )
        print(f"Mean scoring turn : {mean_score}")
        print(f"Mean non scoring turn : {mean_non_score}")
