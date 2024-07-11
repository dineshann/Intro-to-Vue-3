const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: false,
            details: ['50% cotton', '30% wool', '20% polyester', '05% silk'],
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            variants: [
                {id: 1101, color: 'green'},
                {id: 1102, color: 'blue' },
            ]
        }
    }
})
