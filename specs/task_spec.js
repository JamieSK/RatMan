var assert = require("assert")
var Task = require("../source/task.js")

 describe("Task", function() {
     beforeEach(function() {
         task = new Task("slay 4 cats", 10, 7, 1000);
     });
     it("should have a description", function() {
         assert.strictEqual(task.description, "slay 4 cats");
     });
     it("should have a difficulty level", function() {
         assert.strictEqual(task.difficulty, 10);
     });
     it("should have an urgency level", function() {
         assert.strictEqual(task.urgency, 7);
     });
     it("should have a reward", function() {
         assert.strictEqual(task.reward, 1000);
     });
     it("should have a completion checker", function() {
         assert.strictEqual(task.isCompleted, false);
     });
     it("should be able to change completion status", function() {
         task.completeTask();
         assert.strictEqual(task.isCompleted, true);
     });
 })
