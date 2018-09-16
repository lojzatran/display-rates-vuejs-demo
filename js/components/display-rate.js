define(['Vue'], () => {
    return {
        template: `
        <div>
            <button @click="getCurrencyRate">Get Rate</button>
            <div>{{rate}} {{currencyExchange}}</div>
        </div>
        `,
        props: {
            amount: {
                type: Number,
                require: true
            },
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
            async getCurrencyRate() {
                const response = await fetch(
                    `https://api.exchangeratesapi.io/latest?base=${this.currencyBase}&symbols=${this.currencyExchange}`
                );
                const result = await response.json();
                this.rate = this.amount * result.rates.CZK;
            }
        }
    }
});
