'use strict';

var TestHelper = require('../../../TestHelper');

/* global bootstrapModeler, inject */

var fs = require('fs');

var modelingModule = require('../../../../lib/features/modeling'),
    replaceModule = require('../../../../lib/features/replace'),
    coreModule = require('../../../../lib/core');



describe('features/replace - chooser', function() {

  var diagramXML = fs.readFileSync('test/fixtures/bpmn/features/replace/01_replace.bpmn', 'utf8');

  var testModules = [ coreModule, modelingModule, replaceModule ];

  beforeEach(bootstrapModeler(diagramXML, { modules: testModules }));


  describe('should show chooser', function() {

    it('for task', inject(function(elementRegistry, modeling, bpmnReplace) {

      // given
      var element = elementRegistry.get('Task_1');

      // when
      bpmnReplace.openChooser({ x: 100, y: 100 }, element);

      // then
      expect(null).toBeDefined();
    }));


    it('for event event', inject(function(elementRegistry, modeling, bpmnReplace) {

      // given
      var element = elementRegistry.get('StartEvent_1');

      // when
      bpmnReplace.openChooser({ x: 100, y: 100 }, element);

      // then
      expect(null).toBeDefined();
    }));


    it('for gateway event', inject(function(elementRegistry, modeling, bpmnReplace) {

      // given
      var element = elementRegistry.get('ExclusiveGateway_1');

      // when
      bpmnReplace.openChooser({ x: 100, y: 100 }, element);

      // then
      expect(null).toBeDefined();
    }));

  });

});
