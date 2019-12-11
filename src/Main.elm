port module Main exposing (..)

import Platform


{-| The port we use to communicate with the CLI
-}
port gotResult : String -> Cmd msg


type alias Flags =
    { input : String
    , day : Int
    , part : Int
    }


type alias Model =
    {}


type Msg
    = NoOp



-- The main program is initialised as a Platform.Worker
-- A worker is a special kind of program, that does not have an User Interface
-- It communicates exlcusively through ports.
-- The main motivation here is running the scripts and printing them in the command line
-- Note that this is unlike most Elm programs, which have a UI!
-- If you are using Advent of Code to learn Elm as a whole, then it is likely
-- that you might want a UI setup, event if it is just to explore.
-- I recommend reading through the [official Elm guide](https://guide.elm-lang.org/) to learn more :)


main : Program Flags Model Msg
main =
    Platform.worker
        { init = init
        , update = update
        , subscriptions = \_ -> Sub.none
        }


init : Flags -> ( Model, Cmd Msg )
init flags =
    -- NOTE: There is an assumption here that solving a day does not have transient state
    -- This might be a bad assumption, because so far it was only me solving Advent of Code problems with this helper!
    -- If this turns out to be the case, you can modify Model and Msg to include it.
    let
        { input, day, part } =
            flags

        solution =
            case ( day, part ) of
                -- Add more cases to the pattern match here!
                ( _, _ ) ->
                    "No solution implemented for day "
                        ++ String.fromInt day
                        ++ " part "
                        ++ String.fromInt part
                        ++ "\n"
                        ++ "If you have implemented it, edit the pattern match in the init function to call it."
    in
    ( {}, gotResult solution )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )
