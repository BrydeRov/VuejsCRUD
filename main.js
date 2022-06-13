const app = Vue.createApp({
    data() {
        return{
            cart: 0,
            product: 'Socks',
            description: 'This are some beautiful socks!',
            logo: './assets/images/moda.png',
            image: './assets/images/socks_green.jpg',
            url: 'https:/github.com',
            inventory: 100,
            onSale: true,
            details: ['50% Cotton' , '%30 Wool', '20% Polyester'],
            variants: [
                { id: 2234, color: '#35dc88', image: './assets/images/socks_green.jpg' },
                { id: 2235, color: '#5a7598', image: './assets/images/socks_blue.jpg' }
            ],
            sizes: [
                {id: 1, size:'S'}
            ],
        }
    },
    methods: {
        addToCart(){
            this.cart += 1
        },
        removeFromCart(){
            this.cart -= 1
        },
        updateImage(variantImage){
            this.image = variantImage
        }
    }
})