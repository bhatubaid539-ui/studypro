import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useAddTask, useDeleteTask, useListTasks } from "@/hooks/useQueries";
import { CheckCircle2, Circle, ClipboardList } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

export function TodoList() {
  const { data: tasks = [], isLoading } = useListTasks();
  const addTask = useAddTask();
  const deleteTask = useDeleteTask();
  const [newTask, setNewTask] = useState("");

  async function handleAddTask() {
    const title = newTask.trim();
    if (!title) return;
    try {
      await addTask.mutateAsync(title);
      setNewTask("");
      toast.success("Task added!");
    } catch {
      toast.error("Failed to add task. Please try again.");
    }
  }

  async function handleDeleteTask(id: bigint) {
    try {
      await deleteTask.mutateAsync(id);
      toast.success("Task removed.");
    } catch {
      toast.error("Failed to delete task. Please try again.");
    }
  }

  return (
    <section id="todo" className="py-24 px-6 bg-background">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            To-Do List
          </h2>
          <p className="text-muted-foreground font-body">
            Track your study tasks and stay on top of your goals.
          </p>
        </motion.div>

        <div className="bg-card border border-border/50 rounded-2xl p-6 shadow-card">
          {/* Add task input */}
          <div className="flex gap-2 mb-6">
            <Input
              data-ocid="todo-input"
              placeholder="Enter task..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
              className="flex-1 bg-background border-border/60 focus:border-primary placeholder:text-muted-foreground/50 font-body"
            />
            <Button
              type="button"
              data-ocid="todo-add-btn"
              onClick={handleAddTask}
              disabled={addTask.isPending}
              className="bg-primary text-primary-foreground hover:opacity-90 transition-smooth shrink-0 font-semibold"
            >
              Add
            </Button>
          </div>

          {/* Loading skeleton */}
          {isLoading && (
            <div className="space-y-2">
              {[1, 2, 3].map((n) => (
                <Skeleton key={n} className="h-11 w-full rounded-xl" />
              ))}
            </div>
          )}

          {/* Empty state */}
          {!isLoading && tasks.length === 0 && (
            <div
              data-ocid="todo-empty"
              className="flex flex-col items-center justify-center py-10 text-center"
            >
              <ClipboardList className="w-10 h-10 text-muted-foreground/40 mb-3" />
              <p className="text-muted-foreground font-body text-sm">
                No tasks yet. Add one above to get started!
              </p>
            </div>
          )}

          {/* Task list */}
          {!isLoading && tasks.length > 0 && (
            <ul className="space-y-2">
              {tasks.map((task, i) => (
                <motion.li
                  key={String(task.id)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: i * 0.04 }}
                  data-ocid={`todo-item-${i}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-background border border-border/40 hover:border-primary/30 hover:bg-muted/20 transition-smooth group"
                >
                  <span className="shrink-0 text-muted-foreground">
                    <Circle className="w-5 h-5" />
                  </span>
                  <span className="flex-1 min-w-0 text-sm font-body text-foreground truncate">
                    {task.title}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleDeleteTask(task.id)}
                    aria-label="Delete task"
                    disabled={deleteTask.isPending}
                    className="shrink-0 opacity-0 group-hover:opacity-100 text-muted-foreground/50 hover:text-destructive transition-smooth focus-visible:outline-none focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-ring rounded text-xs px-1.5 py-0.5"
                  >
                    ✕
                  </button>
                </motion.li>
              ))}
            </ul>
          )}

          {!isLoading && tasks.length > 0 && (
            <p className="mt-4 text-xs text-muted-foreground/60 font-body text-right">
              {tasks.length} task{tasks.length !== 1 ? "s" : ""}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
