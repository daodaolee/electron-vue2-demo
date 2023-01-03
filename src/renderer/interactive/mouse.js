// 鼠标右键
const mouseRight = () => {
  const { remote } = require('electron')
  const { Menu, MenuItem } = remote
  const menu = new Menu();
  menu.append(new MenuItem({
    "label": "菜单",
  }))
  menu.append(new MenuItem({
    "label": "粘贴", accelerator: 'command+n', click: () => { console.log("123") }
  }))
  menu.append(new MenuItem({
    "label": "上传", accelerator: 'command+p', click: () => { console.log("上传") }
  }))
  menu.popup(remote.getCurrentWindow());
}
export {
  mouseRight
}