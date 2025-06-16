# Unrestricted grammar simulator

A fun project to simulate a non-deterministic, turing complete computational model. It is almost as simple as find and replace!

### Format of rules:

    START -> A | B | C
    A -> B
    B <Question prompt text> -> C
    C -> D <Option prompt text> | E | F <Option prompt text>
    ABC -> XYZ
    XY -> ij
    Z -> k
    D -> a | d
### Run in docker:
    docker run -p 3000:3000 --rm ghcr.io/koevoet1221/unrestricted-grammar-simulator:latest
