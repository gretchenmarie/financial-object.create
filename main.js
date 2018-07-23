const financialOrg = Object.create({}, {
    companyName: {
        value: "finance company",
        writeable: true,
        enumerable: true
    },
    companySpecialty: {
        value: "financial planning",
        writeable: true,
        enumerable: true
    },
    customerName: {
        value: "Gretchen Ward",
        enumerable: true
    },
    portfolio: {
        value: [
            {
                symbol: "tar",
                company: "target",
                shares: 2,
                evaluation: 120
            },
            {
                symbol: "apl",
                company: "apple",
                shares: 3,
                evaluation: 32
            },
            {
                symbol: "dll",
                company: "dell",
                shares: 5,
                evaluation: 90
            }
        ],

        enumerable: false

    },
    portfolioValue: {
        value:
            function () {
                let total = 0

                for (let i = 0; i < financialOrg.portfolio.length; i++) {
                    const finance = financialOrg.portfolio[i].shares * financialOrg.portfolio[i].evaluation;
                    total = total + finance
                    console.log(finance);



                }
                console.log(total);
            },


        enumerable: false
    },



});
financialOrg.portfolioValue()