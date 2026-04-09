import Types "../types/tasks";
import List "mo:core/List";

module {
  public type Task = Types.Task;
  public type TaskId = Types.TaskId;

  public func addTask(tasks : List.List<Task>, nextId : Nat, title : Text) : Task {
    let task : Task = { id = nextId; title };
    tasks.add(task);
    task;
  };

  public func deleteTask(tasks : List.List<Task>, id : TaskId) : () {
    let filtered = tasks.filter(func(t : Task) : Bool { t.id != id });
    tasks.clear();
    tasks.append(filtered);
  };

  public func listTasks(tasks : List.List<Task>) : [Task] {
    tasks.toArray();
  };
};
