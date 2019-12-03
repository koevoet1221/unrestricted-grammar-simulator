export default {
    'Legal Chatbot': `START -> #S0#

    S0 <Choose a tort> -> TRESPASS <Trespass> | WILKINSON | NEGLIGENCE 
    
    TRESPASS <Choose a category> -> BATTERY | ASSAULT | FALSE IMPRISONMENT
    
    BATTERY <Unauthorised and harmful or offensive physical contact with another person?> -> LIABILITY Battery <Yes> | NO_LIABILITY <No>
    
    ASSAULT -> <The threat of immediate harm or offensive contact> | <Any action that arouses reasonable apprehension of imminent harm> | NO_LIABILITY <Neither>
    
    FALSE IMPRISONMENT -> Todo more here
    
    WILKINSON -> Todo more here
    
    NEGLIGENCE -> NEGLIGENCE_DOC
    
    NEGLIGENCE_DOC <Does D owe P an established Duty of Care?> -> NEGLIGENCE_DOC_NOVEL <No> | ... | ... | ...
    
    NEGLIGENCE_DOC_NOVEL <Do the salient features of this relationship warrant a duty of care?> -> <Yes> | <No>
    
    NO_LIABILITY -> There is no liability.
    
    LIABILITY -> The defendant is liable for`,

    'Unary adder': `
    START -> #100000111#
    1# -> 1++
    0# -> 1

    01++ -> 10
    11++ -> 1++0

    #0 -> #
    #1++ -> 10`
}