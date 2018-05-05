describe('Controllers', function(){
    let httpBackend;
    beforeEach(module('searchTable'));

    beforeEach(inject(function($httpBackend) {
        httpBackend = $httpBackend;
    }));

    afterEach (function () {

        try {
            httpBackend.flush();
        } catch (e) {
            console.log(e);
        }
        httpBackend.verifyNoOutstandingExpectation ();
        httpBackend.verifyNoOutstandingRequest ();
    });

    describe('MainTblCtrl',function(){
        let MainTblCtrl;
        let scope;
        let myctrl;
        beforeEach(inject(function($controller, $rootScope){
            scope = $rootScope.$new;
            myctrl = $controller('MainTblCtrl', {$scope : scope});

        }));

        it('should return works', function(){
            expect(myctrl.testSuiteWorksVar).toBe('Works!');
        });

        it('sends GET request to http://jsonplaceholder.typicode.com/posts', function() {
            httpBackend.expect('GET', 'http://jsonplaceholder.typicode.com/posts');

        });


    });
});
