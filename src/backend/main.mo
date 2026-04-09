import Types "types/tasks";
import TasksApi "mixins/tasks-api";
import List "mo:core/List";

actor {
  let tasks = List.empty<Types.Task>();
  let nextTaskId = { var value : Nat = 0 };

  include TasksApi(tasks, nextTaskId);
};
