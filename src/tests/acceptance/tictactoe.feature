Feature: TicTacToe basic game rules

    Scenario: When game is started there should be empty TicTacToe board

        When TicTacToe game is started
        Then game board is empty
