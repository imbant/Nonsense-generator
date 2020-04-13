const init = () => {
  let name = ''
  let thing = ''

  const changeOutput = () => {
    const output = document.getElementById('output')
    output.value = `    　　${name}${thing}是怎么回事呢？${name}相信大家都很熟悉，但是${name}${thing}是怎么回事呢，下面就让小编带大家一起了解吧。
    　　${name}${thing}，其实事实就是${name}${thing}了，大家可能会很惊讶${name}怎么会${thing}呢？但事实就是这样，小编也感到非常惊讶。
    　　这就是关于${name}${thing}的事情了，大家有什么想法呢，欢迎在评论区告诉小编一起讨论哦！`
  }

  const onNameChange = (e) => {
    console.log(e.target.value)
    name = e.target.value
    changeOutput()
  }

  const onThingChange = (e) => {
    console.log(e.target.value)
    thing = e.target.value
    changeOutput()
  }

  document.getElementById('name').addEventListener('change', onNameChange)
  document.getElementById('thing').addEventListener('change', onThingChange)
}

init()