//Shape is array in this order
// address : string
// name: string
// symbol: string
// amount: bigint
// [address,name,symbol,amount]

// getBridgeTokenList will return a 2d array [ [address,name,symbol,amount], [address,name,symbol,amount]]

type TokenInfo = [string, string, string, bigint];

type TokenList = TokenInfo[];
