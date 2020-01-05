import React from 'react'

class Filter extends React.Component {
  render() {
    // filterというステートを渡されるだけにしよー
    const { filter } = this.props
    return (
      // で、selectのvalueにこのfilterを渡してあげることで値をjsで管理できるようになったー。
      // で、親要素から渡してあげると。
      <select  value = {filter} onChange={this.handleChange}>
        <option value="all">全て</option>
        <option value="uncompleted">未完了</option>
        <option value="completed">完了済み</option>
      </select>
    );
  }

  handleChange = e => {
    // console.log(e.currentTarget.value)

    // 親から渡されたonChangeを呼ぶようにする。
    // でFilterに対してonChangeを渡してあげる。
    this.props.onChange(e.currentTarget.value);
  }
}

export default Filter;