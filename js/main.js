requirejs(
    {
        paths: {
            // the Vue lib
            'Vue': 'https://unpkg.com/vue@2.5.17/dist/vue.min',
            // Vue RequireJS loader
            'vue': 'https://unpkg.com/requirejs-vue@1.1.5/requirejs-vue'
        }
    },
    ['Vue', 'components/display-rate'], (Vue, DisplayRate) => {
        window.vue = new Vue({
            el: '#app',
            components: {
                DisplayRate
            },
            data: {
                currencyBase: 'EUR',
                currencyExchange: 'CZK'
            }
        });
    });
