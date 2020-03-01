new Vue({
    el: '#app',
    data: {
        query: ''
    },
    methods: {
        onSubmit(e) {
            debugger
        },
        onReset() {
            this.query = ''
            // TODO : 검색 결과를 숨겨야함
            debugger
        },
        onKeyup(e) {
            if (!this.query.length) this.onReset()
        }
    }
})