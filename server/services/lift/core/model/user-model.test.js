'use strict';

let expect = require('chai').expect;
let userModel = require('services/lift/core/model/user-model.js');

describe('User Model service', function () {
    describe('data validation', function () {
        it('should validate data for User', function () {
            expect(userModel.isValid({
                email: 'someEmail@.domain.com',
                favouriteRoutes: [],
                firstName: 'Boris',
                lastName: 'Shoot Me'
            })).to.be.ok;
        });

        it('should return false when email is not specified', function () {
            expect(userModel.isValid({
                favouriteRoutes: [],
                firstName: 'Boris',
                lastName: 'Shoot Me'
            })).to.be.not.ok;
        });

        it('should return false when email is not string', function () {
            expect(userModel.isValid({
                email: [1,2,3],
                favouriteRoutes: [],
                firstName: 'Boris',
                lastName: 'Shoot Me'
            })).to.be.not.ok;
        });
    });
});