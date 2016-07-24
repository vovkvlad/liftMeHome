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


    describe('user creation', function () {
        it('should create a user with correct data', function () {
            let validData = {
                email: 'someEmail@.domain.com',
                favouriteRoutes: [],
                firstName: 'Boris',
                lastName: 'Shoot Me'
            };

            let testUser = new userModel(validData);

            expect(testUser.data).to.eql(validData);
            expect(testUser.model).to.exist;
        });

        it('should create a user with correct data', function () {
            let invalidData = {
                email: null,
                favouriteRoutes: [],
                firstName: 'Boris',
                lastName: 'Shoot Me'
            };

            let testFunction = () => {
                return new userModel(invalidData);
            }

            expect(testFunction).to.throw(Error);
        });

        it.only('should save crated user to database', function () {
            let validData = {
                email: 'someEmail@.domain.com',
                favouriteRoutes: [],
                firstName: 'Boris',
                lastName: 'Shoot Me'
            };

            let testUser = new userModel(validData);

            /*testUser.save().then(function (model) {
                console.log(model.id);
                var y = userModel.find({'id': model.id}).then(function (foundUser) {
                    var x = foundUser;
                });
                console.log(y);
            });*/

            userModel.find().then(function (found) {
                console.warn(found);
            });


            /*expect(testUser.data).to.eql(validData);
            expect(testUser.model).to.exist;*/
        });
    });
});