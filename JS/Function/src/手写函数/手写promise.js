/**
 * promise：解决'回调地狱'，将回调嵌套改为链式调用，增加可读性和可维护性
 */

// 一个简单的promise使用
/*
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('result')
  }, 1000)
})
p1.then(res => console.log(res), err => console.log(err))
*/

/**
 * promise构造方法接收一个 executor() ,在 new Promise() 时就立刻执行2这个 executor 回调
 * executor() 内部的异步任务被放入宏/微任务队列，等待执行
 * then() 被执行，收集成功/失败回调，放入成功/失败队列
 * execuor() 的异步任务被执行，触发resolve/reject，从成功/失败队列中取出回调依次执行
 */
// 观察者模式：收集依赖 => 触发通知 => 取出依赖执行
// promise中：then收集依赖 => 异步触发resolve => resolve执行依赖
/*
class MyPromise {
  // 构造方法接收一个回调
  constructor(exectuor) {
    this._resolveQuece = [] // then收集的执行成功的回调队列
    this._rejectQuece = [] // then收集的执行失败的回调队列

    // 由于resolve/reject是在exectuor内部被调用，因此需要使用箭头函数固定this指向
    let _resolve = val => {
      // 从成功队列中取出回调依次执行
      while (this._resolveQuece.length) {
        const callback = this._resolveQuece.shift()
        callback(val)
      }
    }
    let _reject = val => {
      while (this._rejectQuece.length) {
        const callback = this._rejectQuece.shift()
        callback(val)
      }
    }

    // new Promise() 时立即执行exectuor，并传入resolve和reject
    exectuor(_resolve, _reject)
  }

  // then方法，接收一个成功的回调和一个失败的回调，并push进对应队列
  then(resolveFn, rejectFn) {
    this._resolveQuece.push(resolveFn)
    this._rejectQuece.push(rejectFn)
  }
}

const p2 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('result')
  }, 1000)
})
p2.then(res => console.log(res))
*/

/**
 * Promise A + 规范 => 对Promise的状态控制做出了规范
 * 核心大致规则：
 *  1、Promise 本质是一个状态机，且状态只能为以下三种：Pending(等待态)、Fulfilled(执行态)、Rejected(拒绝态)
 *      状态的变更是单向的，只能从 Pending => Fulfilled / Pending => Reject, 状态变更不可逆
 *  2、then方法接受两个可选参数，分别对应状态改变时触发的回调。then方法返回一个promise，then方法可以被同一个promise调用多次
 */

/*
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
  // 构造方法接收一个回调
  constructor(exectuor) {
    this._status = PENDING // promise状态
    this._resolveQuece = [] // then收集的执行成功的回调队列
    this._rejectQuece = [] // then收集的执行失败的回调队列

    // 由于resolve/reject是在exectuor内部被调用，因此需要使用箭头函数固定this指向
    let _resolve = val => {
      if (this._status !== PENDING) return // 对应规范中的状态只能由pending到fulfile或reject
      this._status = FULFILLED // 变更状态

      // 之所以使用队列，是为了实现 then 方法可以被同一个promise调用多次
      // 从成功队列中取出回调依次执行
      while (this._resolveQuece.length) {
        const callback = this._resolveQuece.shift()
        callback(val)
      }
    }
    let _reject = val => {
      if (this._status !== PENDING) return // 对应规范中的状态只能由pending到fulfile或reject
      this._status = REJECTED // 变更状态

      while (this._rejectQuece.length) {
        const callback = this._rejectQuece.shift()
        callback(val)
      }
    }

    // new Promise() 时立即执行exectuor，并传入resolve和reject
    exectuor(_resolve, _reject)
  }

  // then方法，接收一个成功的回调和一个失败的回调，并push进对应队列
  then(resolveFn, rejectFn) {
    this._resolveQuece.push(resolveFn)
    this._rejectQuece.push(rejectFn)
  }
}

*/

// .then() 链式链式调用
/*
const p3 = new Promise((resolve, reject) => {
  resolve(1)
})

p3
  .then(res => {
    console.log(res, 111);
    // then 回调中可以return一个promise
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(2)
      }, 5000)
    })
  })
  .then(res => {
    console.log(res, 222);
    return 3
  })
  .then(res => {
    console.log(res, 333);
  })
*/

/**
 * .then() 需要返回一个Promise，这样才能找到then方法，会把then方法的返回值包装成Promise
 * .then() 的回调需要拿到上一个 .then() 的返回值
 * .then() 的回调需要顺序执行
 * 等待当前Promise状态变更后，再执行下一个then收集的回调，这就需要对then的返回值分类讨论
 */

/*
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
  // 构造方法接收一个回调
  constructor(exectuor) {
    this._status = PENDING // promise状态
    this._resolveQuece = [] // then收集的执行成功的回调队列
    this._rejectQuece = [] // then收集的执行失败的回调队列

    // 由于resolve/reject是在exectuor内部被调用，因此需要使用箭头函数固定this指向
    let _resolve = val => {
      if (this._status !== PENDING) return // 对应规范中的状态只能由pending到fulfile或reject
      this._status = FULFILLED // 变更状态

      // 之所以使用队列，是为了实现 then 方法可以被同一个promise调用多次
      // 从成功队列中取出回调依次执行
      while (this._resolveQuece.length) {
        const callback = this._resolveQuece.shift()
        callback(val)
      }
    }
    let _reject = val => {
      if (this._status !== PENDING) return // 对应规范中的状态只能由pending到fulfile或reject
      this._status = REJECTED // 变更状态

      while (this._rejectQuece.length) {
        const callback = this._rejectQuece.shift()
        callback(val)
      }
    }

    // new Promise() 时立即执行exectuor，并传入resolve和reject
    exectuor(_resolve, _reject)
  }

  // then方法，接收一个成功的回调和一个失败的回调，并push进对应队列
  then(resolveFn, rejectFn) {
    // 返回一个新的promise
    return new Promise((resolve, reject) => {
      // 把resolveFn重新包装，再push进resolve执行队列中，这是为了能够获取回调的返回值进行分类讨论
      const fulfilledFn = value => {
        try {
          // 执行当前第一个Promise的成功回调，并获取返回值
          let x = resolveFn(value)
          // 分类讨论返回值，如果是promise，那么等待Promise状态变更，否则直接resolve
          // resolve之后，就能够被下一个.then() 的回调获取到返回值，从而实现链式调用
          x instanceof MyPromise ? x.then(resolve, reject) : resolve(x)
        } catch (error) {
          reject(error)
        }
      }

      // 将后续then收集的依赖都push进入当前Promise的成功回调队列中(_resolveQueue), 这是为了保证顺序调用
      this._resolveQuece.push(fulfilledFn)

      const rejectedFn = error => {
        try {
          let x = rejectFn(error)
          x instanceof MyPromise ? x.then(resolve, reject) : resolve(x)
        } catch (error) {
          reject(error)
        }
      }

      this._rejectQuece.push(rejectedFn)
    })
  }
}

const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 3000)
})
p4
  .then(res => {
    console.log(res)
    return 2
  })
  .then(res => {
    console.log(res)
    return 3
  })
  .then(res => {
    console.log(res)
  })
*/

// 值穿透 和 状态已变更 情况
/**
 * 值穿透：如果 then() 接收的参数不是function， 那么应该忽略它。如果没有忽略，当then() 回调不为function时将会抛出异常，导致链式调用中断
 * 处理状态为resolve/reject的情况：上边then() 的写法时对应状态为pending的情况，
 *  但是有时，resolve/reject在then()之前就被执行(如： Promise.resolve().then() ), 
 *  如果这个时候还把then() 回调push进resolve/reject的执行队列中，那么回调将不会执行，
 *  因此对于状态已经变为fulfilled/rejected的情况，我们直接执行then回调
 */
/*
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
  // 构造方法接收一个回调
  constructor(exectuor) {
    this._status = PENDING // promise状态
    this._value = undefined // 存储then回调return的值
    this._resolveQuece = [] // then收集的执行成功的回调队列
    this._rejectQuece = [] // then收集的执行失败的回调队列

    // 由于resolve/reject是在exectuor内部被调用，因此需要使用箭头函数固定this指向
    let _resolve = val => {
      if (this._status !== PENDING) return // 对应规范中的状态只能由pending到fulfile或reject
      this._status = FULFILLED // 变更状态

      // 之所以使用队列，是为了实现 then 方法可以被同一个promise调用多次
      // 从成功队列中取出回调依次执行
      while (this._resolveQuece.length) {
        const callback = this._resolveQuece.shift()
        callback(val)
      }
    }
    let _reject = val => {
      if (this._status !== PENDING) return // 对应规范中的状态只能由pending到fulfile或reject
      this._status = REJECTED // 变更状态

      while (this._rejectQuece.length) {
        const callback = this._rejectQuece.shift()
        callback(val)
      }
    }

    // new Promise() 时立即执行exectuor，并传入resolve和reject
    exectuor(_resolve, _reject)
  }

  // then方法，接收一个成功的回调和一个失败的回调，并push进对应队列
  then(resolveFn, rejectFn) {
    // 根据规范，如果then的参数不是function, 则需要忽略它，让链式调用继续往下执行
    typeof resolveFn !== 'function' ? resolveFn = value => value : null
    typeof rejectFn !== 'function' ? rejectFn = reason => {
      throw new Error(reason instanceof Error ? reason.message : reason)
    } : null

    // 返回一个新的promise
    return new Promise((resolve, reject) => {
      // 把resolveFn重新包装，再push进resolve执行队列中，这是为了能够获取回调的返回值进行分类讨论
      const fulfilledFn = value => {
        try {
          // 执行当前第一个Promise的成功回调，并获取返回值
          let x = resolveFn(value)
          // 分类讨论返回值，如果是promise，那么等待Promise状态变更，否则直接resolve
          // resolve之后，就能够被下一个.then() 的回调获取到返回值，从而实现链式调用
          x instanceof MyPromise ? x.then(resolve, reject) : resolve(x)
        } catch (error) {
          reject(error)
        }
      }

      // 将后续then收集的依赖都push进入当前Promise的成功回调队列中(_resolveQueue), 这是为了保证顺序调用
      // this._resolveQuece.push(fulfilledFn)

      const rejectedFn = error => {
        try {
          let x = rejectFn(error)
          x instanceof MyPromise ? x.then(resolve, reject) : resolve(x)
        } catch (error) {
          reject(error)
        }
      }

      // this._rejectQuece.push(rejectedFn)
      switch (this._status) {
        // 当状态为pending时，把then回调push进resolve/reject执行队列，等待执行
        case PENDING:
          this._resolveQueue.push(fulfilledFn)
          this._rejectQueue.push(rejectedFn)
          break
        case FULFILLED:
          fulfilledFn(this._value) // this._value是上一个then回调return的值
          break
        case REJECTED:
          rejectedFn(this._value)
          break
      }
    })
  }
}
*/
/**
 * Promise的执行顺序是 new Promise() => then() 收集回调 => resolve/reject 执行回调
 *    这一顺序是建立在exectuor 是异步任务的前提上
 * 如果exectuor 是一个同步任务，那么顺序变为 new Promise() => resolve/reject 执行回调 => then() 收集回调
 *    resolve 的执行跑到then之前去了，为了兼容这种情况，给 resolve/reject 执行回调的操作包一个setTimeOut,让其异步执行
 * Promise的默认实现是放进了微任务队列，以上的实现(包括大多数Promise手动实现和 polyfill 的转化) 都是使用setTimeout放入了宏任务队列
 */
/*
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
  constructor(exectuor) {
    this._status = PENDING
    this._value = undefined
    this._resolveQueue = []
    this._rejectQueue = []

    let _resolve = val => {
      const run = () => {
        if (this._status !== PENDING) return
        this._status = FULFILLED
        this._value = val

        while (this._resolveQueue.length) {
          const callback = this._resolveQueue.shift()
          callback(val)
        }
      }
      setTimeout(run)
    }

    let _reject = val => {
      const run = () => {
        if (this._status !== PENDING) return
        this._status = REJECTED
        this._value = val

        while (this._rejectQueue.length) {
          const callback = this._rejectQueue.shift()
          callback(val)
        }
      }
      setTimeout(run)
    }

    exectuor(_resolve, _reject)
  }

  then(resolveFn, rejectFn) {
    typeof resolveFn !== 'function' ? resolveFn = value => value : null
    typeof rejectFn !== 'function' ? rejectFn = reason => {
      throw new Error(reason instanceof Error ? reason.message : reason)
    } : null

    return new MyPromise((resolve, reject) => {
      const fulfilledFn = value => {
        try {
          let x = resolveFn(value)
          x instanceof MyPromise ? x.then(resolve, reject) : resolve(x)
        } catch (error) {
          reject(error)
        }
      }

      const rejectedFn = error => {
        try {
          let x = rejectFn(error)
          x instanceof MyPromise ? x.then(resolve, reject) : resolve(x)
        } catch (error) {
          reject(error)
        }
      }

      switch (this._status) {
        case PENDING:
          this._resolveQueue.push(fulfilledFn)
          this._rejectQueue.push(rejectedFn)
          break
        case FULFILLED:
          fulfilledFn(this._value)
          break
        case REJECTED:
          rejectedFn(this._value)
          break
      }
    })
  }
}
const p5 = new MyPromise((resolve, reject) => {
  resolve(1)  // 同步 exectuor 测试
})
p5
  .then(res => {
    console.log(res)
    return 2  // 链式调用测试
  })
  .then() // 穿透值测试
  .then(res => {
    console.log(res)
    return new MyPromise((resolve, reject) => {
      resolve(3) // 返回Promise测试
    })
  })
  .then(res => {
    console.log(res)
    throw new Error('reject测试') // reject测试
  })
  .then(() => {}, err => {
    console.log(err);
  })

  */

/**
 * Promise.prototype.catch() => 返回一个Promise，并且处理拒绝的情况
 */

const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
  constructor(exectuor) {
    this._status = PENDING
    this._value = undefined
    this._resolveQueue = []
    this._rejectQueue = []

    let _resolve = val => {
      const run = () => {
        if (this._status !== PENDING) return
        this._status = FULFILLED
        this._value = val

        while (this._resolveQueue.length) {
          const callback = this._resolveQueue.shift()
          callback(val)
        }
      }
      setTimeout(run)
    }

    let _reject = val => {
      const run = () => {
        if (this._status !== PENDING) return
        this._status = REJECTED
        this._value = val

        while (this._rejectQueue.length) {
          const callback = this._rejectQueue.shift()
          callback(val)
        }
      }
      setTimeout(run)
    }

    exectuor(_resolve, _reject)
  }

  then(resolveFn, rejectFn) {
    typeof resolveFn !== 'function' ? resolveFn = value => value : null
    typeof rejectFn !== 'function' ? rejectFn = reason => {
      throw new Error(reason instanceof Error ? reason.message : reason)
    } : null

    return new MyPromise((resolve, reject) => {
      const fulfilledFn = value => {
        try {
          let x = resolveFn(value)
          x instanceof MyPromise ? x.then(resolve, reject) : resolve(x)
        } catch (error) {
          reject(error)
        }
      }

      const rejectedFn = error => {
        try {
          let x = rejectFn(error)
          x instanceof MyPromise ? x.then(resolve, reject) : resolve(x)
        } catch (error) {
          reject(error)
        }
      }

      switch (this._status) {
        case PENDING:
          this._resolveQueue.push(fulfilledFn)
          this._rejectQueue.push(rejectedFn)
          break
        case FULFILLED:
          fulfilledFn(this._value)
          break
        case REJECTED:
          rejectedFn(this._value)
          break
      }
    })
  }

  /**
   * Promise.prototype.catch() => 返回一个Promise，并且处理拒绝的情况
   * catch方法其实就是执行一下then的第二个回调
   */
  catch (rejectFn) {
    return this.then(undefined, rejectFn)
  }

  /**
   * Promise.prototype.finally() => 返回一个Promise。在promise结束后，都会执行执行的回调函数。在finally之后，还可以继续then，并且会将值原封不动的传递给后面的then
   */
  finally(callback) {
    return this.then(
      value => MyPromise.resolve(callback()).then(() => value), // MyPromise.resolve执行回调，并在then中return结果传递给后面的Promise
      reason => MyPromise.resolve(callback()).then(() => {
        throw reason
      })
    )
  }

  /**
   * Promise.resolve(value) => 返回一个以给定解析后的Promise对象，如果该值为promise，则返回这个promise
   *   如果这个值是thenable(带有then方法)，返回的promise会跟随这个thenable对象，采用它的最终状态
   *   否则返回的promise将以此值完成
   * 此函数将类promise对象的多层嵌套展平
   */
  static resolve(value) {
    if (value instanceof MyPromise) return value // 如果参数是Promise实例，直接return这个实例
    return new MyPromise(resolve => resolve(value))
  }

  /**
   * Promise.reject() => 返回一个带有拒绝原因的Promise对象
   */
  static reject(reason) {
    return new MyPromise((resolve, reject) => reject(reason))
  }

  /**
   * Promise.all(iterable) => 返回一个Promise实例
   *   此实例在iterable参数内所有的promise都完成(resolved)或参数中不包含promise时回调完成(resolve)
   *   如果参数中promise有一个失败(rejected)，此实例回调失败(reject)，失败的原因是第一个失败的promise的结果
   */
  static all(promiseArr) {
    let index = 0
    let result = []
    return new MyPromise((resolve, reject) => {
      promiseArr.forEach((p, i) => {
        // Promise.resolve(p)用于处理传入值不为Promise的情况
        MyPromise.resolve(p).then(
          val => {
            index++
            result[i] = val
            // 所有then执行后，resolve结果
            if (index === promiseArr.length) {
              resolve(result)
            }
          },
          err => {
            // 有一个Promise被reject时，MyPromise的状态变为reject
            reject(err)
          }
        )
      })
    })
  }

  /**
   * Promise.race(iterable) => 返回一个promise, 一旦迭代器中的某一个promise解决或拒绝，返回的promise就会解决或拒绝
   */
  static race(promiseArr) {
    return new MyPromise((resolve, reject) => {
      //同时执行Promise,如果有一个Promise的状态发生改变,就变更新MyPromise的状态
      for (let p of promiseArr) {
        MyPromise.resolve(p).then( //Promise.resolve(p)用于处理传入值不为Promise的情况
          value => {
            resolve(value) // 这个resolve是上边new MyPromise的
          },
          err => {
            reject(err)
          }
        )
      }
    })
  }
}