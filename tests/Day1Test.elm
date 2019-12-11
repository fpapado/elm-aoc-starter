module Day1Test exposing (..)

import Day1
import Expect exposing (Expectation)
import Test exposing (..)


suite : Test
suite =
    -- Read https://package.elm-lang.org/packages/elm-explorations/test/latest for more information!
    describe "Day 1"
        [ describe "Part 1"
            [ test "Does the thing" <|
                \_ ->
                    let
                        solution =
                            Day1.part1 "This is a fake input"
                    in
                    Expect.pass
            ]
        ]
