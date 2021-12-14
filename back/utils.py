# Check boolean response for y & n question
def check_user_boolean_response(response):
    if response != 'y' and response != 'n':
        parsed_response = check_user_boolean_response(input("Bad response please answer y or n. [y/n] ?"))
    else:
        parsed_response = False if response == 'n' else True
    return parsed_response