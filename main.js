const app = Vue.createApp({
    data() {
        return{
            product: 'Socks',
            description: 'This are some beautiful socks!',
            image: './assets/images/socks_green.jpg',
            url: 'https:/github.com',
            inventory: 10,
            onSale: true,
            details: ['50% Cotton' , '%30 Wool', '20% Polyester'],
            variants: [
                { id: 2234, color: 'green' },
                { id: 2235, color: 'blue' }
            ],
            sizes: [
                {id: 1, size:'S'}
            ],
        }
    }
})