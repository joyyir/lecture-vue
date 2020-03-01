import View from './View.js'

const tag = '[FormView]'

const FormView = Object.create(View)

FormView.setup = function (el) {
    this.init(el)
    this.inputEl = el.querySelector('[type=text')
    this.resetEl = el.querySelector('[type=reset')
    this.showResetBtn(false)
    this.bindEvents()
    return this
}

FormView.showResetBtn = function(show = true) {
    this.resetEl.style.display = show ? 'block' : 'none'
}

FormView.bindEvents = function () {
    this.inputEl.addEventListener('keyup', e => this.onKeyup(e))
    this.resetEl.addEventListener('click', e => this.onClickReset(e))
}

FormView.onKeyup = function (e) {
    const enter = 13
    const isNotEmpty = this.inputEl.value.length
    this.showResetBtn(isNotEmpty)
    if (!isNotEmpty) this.emit('@reset')
    if (e.keyCode !== enter) return
    this.emit('@submit', {input: this.inputEl.value})
}

FormView.onClickReset = function (e) {
    this.emit('@reset')
    this.showResetBtn(false)
    this.inputEl.focus()
}

FormView.setValue = function (value = '') {
    this.inputEl.value = value
    this.showResetBtn(value.length)
}

export default FormView