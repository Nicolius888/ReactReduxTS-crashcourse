const initialState = 0; 
 
interface DepostiAction{
    type: "deposit"
    payload: number
}

interface WithdrawAction {
    type: "withdraw"
    payload: number
}

interface  BankruptAction {
    type: "bankrupt"
}

export type Action = DepostiAction | WithdrawAction | BankruptAction