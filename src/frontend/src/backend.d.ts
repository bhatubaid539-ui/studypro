import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Task {
    id: TaskId;
    title: string;
}
export type TaskId = bigint;
export interface backendInterface {
    addTask(title: string): Promise<Task>;
    deleteTask(id: TaskId): Promise<void>;
    listTasks(): Promise<Array<Task>>;
}
