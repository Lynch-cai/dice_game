class Player:
    def __init__(self, id, username):
        self.username = username
        self.id = id
        self.score = 0
        self.rank = 0
        self.turn = 1
        self.roll_nb = 0
        self.bonus = {"full_roll": 0, "standard": 0}
        self.potential_points_lost = 0

    def update(self, score, roll_nb, bonus, potential_points_lost, rank):
        self.score += score
        self.roll_nb += roll_nb
        self.potential_points_lost += potential_points_lost
        self.turn += 1
        self.bonus["full_roll"] += bonus["full_roll"]
        self.bonus["standard"] += bonus["standard"]
        self.rank = rank
