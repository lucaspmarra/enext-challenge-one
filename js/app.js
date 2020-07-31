new Vue({
    el: '#potions',
    data() {
        return {
            potions_list: [],
            loading: true,
            errored: false
        }
    },
    mounted: function () {
        this.getAllPotions();
    },
    // methods: {
    //     getAllPotions() {
    //         axios
    //             .get('https://cdn.rawgit.com/LucasRuy/1d4a5d45e2ea204d712d0b324af28bab/raw/342e0e9277be486102543c7f50ef5fcf193234b6/potions.json')
    //             .then(function (response) {
    //                 // console.log(response);
    //                 if (response.data.error) {
    //                     this.errored = true
    //                 } else {
    //                     console.log(this.potions_list = response.data.potions);
    //                     this.potions_list = response.data.potions;
    //                 }
    //             })
    //             .finally(() => this.loading = false)
    //     }
    // }
    mounted() {
        axios
            .get('https://cdn.rawgit.com/LucasRuy/1d4a5d45e2ea204d712d0b324af28bab/raw/342e0e9277be486102543c7f50ef5fcf193234b6/potions.json')
            .then((response) => {
                const {potions} = response.data;
                this.potions_list = potions;
                console.log(potions);
                
            })
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => this.loading = false)
    },

})