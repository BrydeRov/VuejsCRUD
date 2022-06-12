const app = Vue.createApp({
    data() {
        return{
            product: 'Socks',
            description: 'This are some beautiful socks!',
            image: './assets/images/socks_green.jpg',
            url: 'https:/github.com',
            inventory: 10,
            onSale: true
        }
    }
})