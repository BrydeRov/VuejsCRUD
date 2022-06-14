const app = Vue.createApp({
    data() {
        return{
            cart: 0,
            brand: 'Vue Mastery',
            website_title: 'VUEJS CRUD',
            product: 'Socks',
            description: 'This are some beautiful socks!',
            logo: './assets/images/moda.png',
            selectedVariant: 0,
            details: ['50% Cotton' , '%30 Wool', '20% Polyester'],
            variants: [
                { id: 2234, color: '#35dc88', image: './assets/images/socks_green.jpg', quantity: 0, price: 70 },
                { id: 2235, color: '#5a7598', image: './assets/images/socks_blue.jpg', quantity: 50, price: 75 }
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
        updateVariant(index){
            this.selectedVariant = index
        }
    },
    computed: {
        title(){
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        price() {
            return this.variants[this.selectedVariant].price
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        }
    }
})