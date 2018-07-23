Practice
Your job is to create an object that represents a financial advisor and has the following properties and methods.

Company (enumerable, writable, property)
Specialty (enumerable, writable, property)
Name (enumerable, property)
Portfolio (non-enumerable, property) - Should display the stocks the advisor currently holds
Worth (non-enumerable, method)
Purchase (non-enumerable, method) - This method takes a stock ticker symbol, a quantity, and a price as arguments
Sell (non-enumerable, method) - This method takes a stock ticker symbol, a quantity, and a price as arguments
When sell() or purchase() are invoked, then the stock portfolio should be modified accordingly. Start off with making portfolio property an array that holds transactions.

When you invoke the worth() method, it should look at every transaction and calculate the advisor's net worth.

Challenge
Use document.createElement to build & display an HTML component to display the advisor's name, company, and specialty.
Iterate over the advisor's portfolio and use document.createDocumentFragment along with document.createElement to display some HTML components representing each stock owned by the advisor.
Advanced Challenge
Change the portfolio property value from an array to an object. Instead of it being a record of transactions, it should only store the advisor's current assets. Each invocation of sell or purchase should modify the advisor's holdings.

{
    "AAPL": {
        "shares": 152,
        "valuation": 30400
    },
    "MSFT": {
        "shares": 290,
        "valuation": 49300
    }
}# financial-object.create
