
require('./page.scss');
require('./card.scss');


class CardEl extends HTMLElement {
  constructor() {
    super();
  }
  set product(product) {
    this.innerHTML = `       
            <div><img src=${product.image} class="card__image"></div>
            <h2 class="card__title">${product.name}</h2>
            <button class="card__cta">Call</button>
          `;
  }
}
customElements.define('card-el', CardEl);

class DataService {
  constructor() {
    this.config = {
      url: "https://randomuser.me/api/"
    };
  }
  async fetchData() {
    try {
      // removed then to improve the redabilty, using async await instead of.then
      let products = await fetch(this.config.url);
      const cards = [
        { "image": "https://randomuser.me/api/portraits/men/15.jpg", "name": "John Nixon", "Gender": "Male" },
        { "image": "https://randomuser.me/api/portraits/men/15.jpg", "name": "Mat Scott Peter", "Gender": "Male" },
        { "image": "https://randomuser.me/api/portraits/men/15.jpg", "name": "Doe", "Gender": "Female" },
        { "image": "https://randomuser.me/api/portraits/men/15.jpg", "name": "Frank John", "Gender": "Male" },
        { "image": "https://randomuser.me/api/portraits/men/15.jpg", "name": "Doe", "Gender": "Female" },
        { "image": "https://randomuser.me/api/portraits/men/15.jpg", "name": "Eric Commedator", "Gender": "Male" },
        { "image": "https://randomuser.me/api/portraits/men/15.jpg", "name": "Doe Joe", "Gender": "Male" },
        { "image": "https://randomuser.me/api/portraits/men/15.jpg", "name": "Doe", "Gender": "Female" },
        { "image": "https://randomuser.me/api/portraits/men/15.jpg", "name": "Nick Yohanson", "Gender": "Female" },
        { "image": "https://randomuser.me/api/portraits/men/15.jpg", "name": "Alex Nick", "Gender": "Male" },
        { "image": "https://randomuser.me/api/portraits/men/15.jpg", "name": "Doe", "Gender": "Female" },
        { "image": "https://randomuser.me/api/portraits/men/15.jpg", "name": "Joe Clusner", "Gender": "Male" },
        { "image": "https://randomuser.me/api/portraits/men/15.jpg", "name": "Mat Anderson", "Gender": "Male" },
        { "image": "https://randomuser.me/api/portraits/men/15.jpg", "name": "Doe", "Gender": "Male" },
        { "image": "https://randomuser.me/api/portraits/men/15.jpg", "name": "Doe", "Gender": "Female" },
        { "image": "https://randomuser.me/api/portraits/men/15.jpg", "name": "Doe", "Gender": "Male" }
      ];
  
      //Note: Given API not return the expected data. So overdridng the response with static response
      products = cards;
      return products;
    } catch (error) {
      // Error handler - not taken care
      console.log(error)
    }      
  }
}

window.customElements.define(
  "card-wrapper",
  class extends HTMLElement {
    constructor() {
      super();
      this.dataService = new DataService();
      this.createCards();
    }
    async createCards() {
      const products = await this.dataService.fetchData();
      const main = document.querySelector('card-wrapper');
      const filteredProduct = this.dataFilter(products);
      filteredProduct.map(product => {
        const el = document.createElement('card-el');
        el.className = 'card';
        el.product = product;
        main.appendChild(el);
      });
    }

    dataFilter(products) {
      // Filter products using gender - return only male
      let filteredData = products.filter((item) => {
        return item.Gender === "Male";
      });   
      return filteredData;
    }
  }
);

