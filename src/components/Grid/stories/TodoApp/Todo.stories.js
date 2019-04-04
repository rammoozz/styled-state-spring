import React from 'react';
import Grid from '../../../../../src/components/Grid/';
import { ListItem, List, Button } from '@material-ui/core';
import uniqueId from 'lodash/uniqueId';
import { useState } from 'react';
import update from 'immutability-helper';
import shuffle from 'lodash/shuffle';
const emojis = ['😸', '😹', '😺', '😻', '😼', '😽', '😾', '😿', '🙀'];

// const randomcolor = () => {
//   return ('00000' + ((Math.random() * (1 << 24)) | 0).toString(16)).slice(-6);
// };

const TodosList = ({ todos, addTodo, removeTodo, current, send }) => {
  return (
    <Grid
      list={todos}
      render={({ item, index }) => {
        return (
          <div onClick={() => removeTodo(index)} key={item.id}>
            {item.content}
          </div>
        );
      }}
      transitionProps={{
        from: {
          transform: 'translate3d(0px,0,0)',
          position: 'relative',
          opacity: 1,
        },
        enter: { transform: 'translate3d(40px,0,0)', opacity: 1 },
        leave: {
          transform: 'translate3d(80px,0,0)',
          position: 'absolute',
          opacity: 0,
        },
      }}
      css={`
        width: 100%;
        font-size: 50px;
        user-select: none;
        cursor: pointer;
      `}
    />
  );
};

const TodoApp = () => {
  const [{ todos }, setTodos] = useState({ todos: [] });
  const addTodo = todo => {
    const newTodos = update(todos, { $push: [todo] });
    setTodos({ todos: newTodos });
  };
  const removeTodo = index => {
    const newTodos = update(todos, { $splice: [[index, 1]] });
    setTodos({ todos: newTodos });
  };
  const newTodo = {
    id: JSON.stringify(uniqueId(new Date())),
    content: shuffle(emojis)[0],
  };
  return (
    <React.Fragment>
      <Grid
        render={({ send, current }) => {
          return (
            <React.Fragment>
              <Button
                onClick={() => addTodo(newTodo)}
                variant={'contained'}
                color={'primary'}
              >
                Add
              </Button>

              <TodosList
                todos={todos}
                addTodo={addTodo}
                removeTodo={removeTodo}
                send={send}
                current={current}
              />
            </React.Fragment>
          );
        }}
      />
    </React.Fragment>
  );
};

export default TodoApp;

import { storiesOf } from '@storybook/react';

storiesOf('Examples', module).add('Todo', () => <TodoApp />);
