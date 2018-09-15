define(['Vue'], () => {
    return {
        template: `
        <div>
            <button @click="getCurrencyRate">Get Rate</button>
            <div>{{rate}} {{currencyExchange}}</div>
        </div>
        `,
        props: {
            currencyBase: {
                type: String,
                require: true
            },
            currencyExchange: {
                type: String,
                require: true
            }
        },
        data() {
            return {
                rate: ''
            }
        },
        methods: {
            getCurrencyRate() {
                fetch(`https://api.exchangeratesapi.io/latest?base=${this.currencyBase}&symbols=${this.currencyExchange}`)
                    .then((response) => {
                        return response.json();
                    })
                    .then((result) => {
                        this.rate = result.rates.CZK;
                    })
            }
        }
    }
});
