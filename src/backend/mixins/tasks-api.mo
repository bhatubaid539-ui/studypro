import Types "../types/tasks";
import TasksLib "../lib/tasks";
import List "mo:core/List";

mixin (tasks : List.List<Types.Task>, nextTaskId : { var value : Nat }) {
  public func addTask(title : Text) : async Types.Task {
    let task = TasksLib.addTask(tasks, nextTaskId.value, title);
    nextTaskId.value += 1;
    task;
  };

  public func deleteTask(id : Types.TaskId) : async () {
    TasksLib.deleteTask(tasks, id);
  };

  public query func listTasks() : async [Types.Task] {
    TasksLib.listTasks(tasks);
  };
};
