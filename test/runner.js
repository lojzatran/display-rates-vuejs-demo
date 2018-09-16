requirejs(
    {
        paths: {
            // the Vue lib
            'Vue': 'https://unpkg.com/vue@2.5.17/dist/vue',
            // Vue RequireJS loader
            'vue': 'https://unpkg.com/requirejs-vue@1.1.5/requirejs-vue',
        }
    },
    ['./display-rate.spec'], () => {
        mocha.run()
    });
