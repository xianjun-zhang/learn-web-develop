// import { useState, useContext } from 'react';
// import { TasksContext, TasksDispatchContext, TasksFilterContext } from './TasksContext';

// export default function TaskList() {
//   const tasks = useContext(TasksContext);
//   const filter = useContext(TasksFilterContext);
//   const filteredTasks = tasks.filter(task => task.completed === filter);


//   const FILTER_MAP = {
//     All: () => true,
//     Active: (t) => !t.completed,
//     Completed: (t) => t.completed,
//   };

//   const FILTER_NAMES = Object.keys(FILTER_MAP);

//   return (
//     <ul>
//       {filteredTasks.map(task => (
//         <li key={task.id}>
//           <Task task={task} />
//         </li>
//       ))}
//     </ul>
//   );
// }