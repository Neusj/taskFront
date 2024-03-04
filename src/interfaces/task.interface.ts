export interface Task {
    _id: string;
    title: string;
    description?: string;
    done?: boolean;
    createdAt: Date;
    updatedAt: Date;
}

// omite los campos indicados par ael nuevo tipo
export type CreateTask = Omit<Task, '_id' | 'createdAt' | 'updatedAt'>

// convierte todos los campo opcionalas al nuevo tipo
export type UpdateTask = Partial<CreateTask>
