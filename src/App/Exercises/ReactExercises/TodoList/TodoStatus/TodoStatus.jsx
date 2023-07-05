import './todostatus.css';

export const TodoStatus = ({
  isDone,
  isDoneDate,
  markAsDone,
  markAsDoneError,
}) => {
  const checkStatus = () => {
    // eslint-disable-next-line default-case
    switch (isDone) {
      case true:
        return 'todo-checked-icon';
      case false:
        return 'todo-unchecked-icon';
      // default:
      //     return 'mark-error'; // 2. zamiennie if-ami poniżej l. 30 z klasą 'mark-error'
    }
  };

  return (
    <div className="todo-status">
      <div>
        <div
          onClick={isDone ? null : markAsDone}
          // className={isDone ? 'todo-checked-icon' : 'todo-unchecked-icon'} // 1. zamiennie poprzez switch w funkcji powyżej l. 8 checkStatus()
          className={markAsDoneError ? 'mark-error' : checkStatus()}
        >
          &#10004;
        </div>

        <div>{isDoneDate || markAsDoneError}</div>
      </div>
    </div>
  );
};
