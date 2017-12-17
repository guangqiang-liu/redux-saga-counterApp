/**
 * Created by guangqiang on 2017/12/17.
 */
import React from 'react'

const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync }) =>
  <div>
    <button onClick={onIncrement}>
      增加
    </button>
    <button onClick={onIncrementAsync}>
      1s后增加
    </button>
    <button onClick={onDecrement}>
      减少
    </button>
    <hr />
    <div>
      数量: {value}
    </div>
  </div>

export default Counter