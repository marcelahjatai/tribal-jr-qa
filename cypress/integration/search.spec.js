/// <reference types = "cypress" />

import search from '../pages/search'

describe('Tribal Credit', function() {
    before('Visit website', function () {
        search.go()
        search.pageValidation()
    })

    it('seacrh job position', function() {
        search.chooseDepartment('Engineering')
        search.chooseOffice('Mexico')
        search.jobPositionValidation('Sr. QA Engineer')
    })
})