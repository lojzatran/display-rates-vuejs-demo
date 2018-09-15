requirejs(
    // configuration
    {
        paths: {
            // the Vue lib
            'Vue': 'https://unpkg.com/vue@2.5.17/dist/vue.min',
            // Vue RequireJS loader
            'vue': 'https://unpkg.com/requirejs-vue@1.1.5/requirejs-vue'
        }
    }, ['Vue', 'components/display-rate'], (Vue, DisplayRate) => {
        new Vue({
            el: '#app',
            components: {
                DisplayRate
            }
        });
    })
