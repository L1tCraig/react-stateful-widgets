/*
COUNTER Instructions

Watch this short video carefully, paying attention to the UI and Chrome Devtools:
https://tk-assets.lambdaschool.com/59036a85-0980-42c8-81ad-9afc8354497f_counter-clip.gif

How many slices of state do you think are necessary to act as "sources of truth" for all
the things that change in this widget? Give it some thought before continuing reading!

A naive developer might say 3 different slices:
  - The count
  - Whether the text is color crimson or royalblue
  - Whether the text reads "even" or "odd"

But a single slice of state is all that's needed here: the count!
The other things can simply be _derived_ from the count itself.

STEP 0:
  Start by studying the component below, and importing the state hook.

STEP 1:
  Using the state hook, create a 'count', 'setCount' pair.
  The 'count' state should be initialized to the number zero.

STEP 2:
  The 'style' object has the 'color' property hard-coded to "royalblue".
  What the value of 'color' should be instead is a ternary expression that goes like this:
  If count is even, then "royalblue", else "crimson".

STEP 3:
  We need to replace some hard-coded info in the JSX with expressions, interpolated inside curly brackets.
  Start by replacing the character "0" with {count}. The 'count' slice of state is the source of truth here.
  Then, replace the word "even" with a ternary: {if count is even number, then string "even", else string "odd"}.

STEP 4:
  This click handler needs to use 'setCount' to schedule the 'count' to become the current 'count' plus one.
  These state changes are not synchronous: the updated count arrives on the next run of the Counter component.
  Do NOT simply do count++. The plus plus is forbidden! We never mutate a slice of state in place. Even if you could
  reassign a const, React would not be aware anything changed. Always use the state updater, passing in a new value.

STEP 5:
  This click handler needs to use 'setCount' to set the 'count' to be the current 'count' minus one.
  Do NOT do count--. That amounts to trying to mutate 'count' in place. This is the road to perdition.

STEP 6:
  This click handler needs to use 'setCount' to set the 'count' to be zero again.
*/

import React, { useState }from 'react'; /* STEP 0 >>>this imports a function called use state that will store and allow updating of a single
variable. can store strings numbers booleans and even code if you get down and nerdy!!!*/

export default function Counter() {
  /* STEP 1 creates a var called count that will = the setcount results*/
  const [count, setCount] = useState(0)

  const increment = () => {
    /* STEP 4 will update useState to be count+1*/
    setCount(count + 1)
  };
  const decrement = () => {
    /* STEP 5 decrease count by 1*/
    setCount(count - 1)
  };
  const reset = () => {
    /* STEP 6 nothing fancy just setting the state to 0*/
    setCount(0)
  };

  const style = {
    fontSize: '1.5em',
    marginBottom: '0.3em',
    color: (count % 2 === 0 ? 'royalBlue' : 'crimson'), /* STEP 2 replaced the card coded blue with a logic path so that if the remainder of count divided by 2 is 0 then it is even and will be blue otherwise since odd numbers have .5 remaining when dividing by 2 it will be odd and return crimson*/
  };

  return (
    <div className='widget-counter container'>
      <h2>Counter</h2>
      <div id='count' style={style}>
        Number {count} is {(count % 2 === 0 ? 'even' : 'odd')} {/* STEP 3  replaced the hard coded words with count and an even odd logic check on count to say either even or odd*/}
      </div>
      <div>
        <button id='increment' onClick={increment}>Increment</button>
        <button id='decrement' onClick={decrement}>Decrement</button>
        <button id='resetCount' onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
