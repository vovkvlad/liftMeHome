'use strict';

var expect = require('chai').expect;

var Interaction = require('./index');

describe('Interaction Module', function () {
    it('should has base methods', function () {
        expect(Interaction).to.be.ok;

        let interaction = new Interaction();

        expect(interaction.getRequestUrl).to.be.ok;
        expect(interaction.request).to.be.ok;
    });

    it('should generate url', function () {
        let interaction = new Interaction();

        expect(interaction.getRequestUrl('/test')).to.be.equal('http://hub.mue.in.ua/test');

        interaction = new Interaction({
            baseUrl: 'http://localhost:20002'
        });

        expect(interaction.getRequestUrl('/test')).to.be.equal('http://localhost:20002/test');
    });
});