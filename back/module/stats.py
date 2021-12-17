import statiscs as stat


def apply_statistic_turn(name_player, value, player_value):
    """
    Check if the player's value is higher than the old one.
    if yes, update the statistics dictionnary
    """
    if player_value > value:
        value = {
            "name_player": name_player,
            "value": player_value,
        }


def calcul_means(list_mean):
    """
    Check if the player's value is higher than the old one.
    if yes, update the statistics dictionnary
    """
    if len(list_mean) > 0:
        mean = stat.mean(list_mean)
        return mean
