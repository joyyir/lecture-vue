import SearchModel from './models/SearchModel.js'

new Vue({
    el: '#app',
    data: {
        query: '',
        submitted: false,
        searchResult: [],
    },
    methods: {
        onSubmit(e) {
            this.search()
        },
        onReset() {
            this.resetForm();
        },
        onKeyup(e) {
            if (!this.query.length) this.resetForm()
        },
        search() {
            SearchModel.list().then(data => {
                this.submitted = true
                this.searchResult = data
            })
        },
        resetForm() {
            this.query = ''
            this.submitted = false
            this.searchResult = []
            this.$refs.form.focus()
        }
    }
})