from back.utils import check_user_boolean_response

# Return all players
def add_players():
    new_player = True
    players = []
    while new_player:
        player_id = len(players) + 1
        players.append(add_player(player_id))
        new_player = check_user_boolean_response(input(f"New player ? [y/n]"))
    return players

# Ask & Return single player
def add_player(player_id):
    player_username = input(f"Player {player_id} ! What's your name ?")
    player = {
        player_username: {
            "score": 0,
            "rank": 0,
            "turn": 0,
            "roll_nb": 0,
            "full_roll_nb": 0,
            "bonus_nb": 0,
            "potential_point_lost": 0,
        }
    }
    return player
