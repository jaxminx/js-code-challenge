// Problem 2
// Task: Implement a datasource connector to abstract away data retrieval and manipulation from the `ViewControllers`.
// Your solution shall use only [Vanilla JavaScript](http://vanilla-js.com).

class Datasource {
  getPrices() {
    return fetch("https://static.ngnrs.io/test/prices") // a promise
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        var prices = result["data"]["prices"];
        var arr = [];
        for (var i = 0; i < prices.length; i++) {
          var price = prices[i];
          arr.push(new Price(price["buy"], price["sell"], price["pair"]));
        }
        return arr;
      });
  }
}

class Price {
  constructor(buy, sell, pair) {
    this.buy = buy;
    this.sell = sell;
    this.pair = pair;
  }

  mid() {
    return (this.buy + this.sell) / 200;
  }

  quote() {
    return this.pair.substr(3);
  }
}

// to test
let ds = new Datasource();
ds.getPrices()
  .then((prices) => {
    prices.forEach((price) => {
      console.log(
        `Mid price for ${price.pair} is ${price.mid()} ${price.quote()}.`
      );
    });
  })
  .catch((error) => {
    console.err(error);
  });
