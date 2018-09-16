define(
    ['Vue', '../js/components/display-rate', 'test-utils'], (Vue, DisplayRate, testUtils) => {

        describe('Display rate component', () => {
            const testRate = 10;

            before(() => {
                testUtils.mockFetch(testRate);
            });

            after(() => {
                testUtils.resetMocks();
            });

            it('should return current rate', async () => {
                const Constructor = Vue.extend(DisplayRate)
                const displayRateComponent = new Constructor({
                    propsData: {
                        currencyBase: "CZK", currencyExchange: "EUR", amount: 1
                    }
                }).$mount();

                await displayRateComponent.getCurrencyRate();
                chai.expect(displayRateComponent.rate).to.be.a('number');
                chai.expect(displayRateComponent.rate).to.equal(testRate);
            });
        });
    });