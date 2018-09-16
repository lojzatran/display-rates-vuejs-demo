define([], () => {
    let originalFetch;

    return {
        mockFetch(testRate) {
            originalFetch = window.fetch;
            window.fetch = () => {
                return {
                    async json() {
                        return Promise.resolve({
                            rates: {
                                "EUR": testRate
                            }
                        });
                    }
                }
            };
        },
        resetMocks() {
            window.fetch = originalFetch;
        }
    }
})
