/**
 * content: '回到顶部',  提示文字
 * color:'white',       字体颜色
 * bgColor: 'black',    背景颜色
 * pos: 'left'          位置，默认top
 */
export default {
  bind(el, binding) {
    // 去除占位空box
    if (el.className.includes('stub')) {
      return
    }
    el.style.position = "relative";
    let tip = document.createElement("span");
    el.addEventListener("mouseover", function () {
      tip.style.display = "block";
    });
    el.addEventListener("mouseout", function () {
      tip.style.display = "none";
    });
    tip.className = "tooltip";
    // 提示框样式
    let css = {
      display: "none",
      position: "absolute",
      padding: "8px 10px",
      borderRadius: "5px",
      color: binding.value.color || "white",
      backgroundColor: binding.value.bgColor || "black",
      fontSize: '12px',
      lineHeight: 1,
      textAlign: 'center',
      zIndex: 9999,
      transition: 'all 0.2s',
      boxShadow: '0 0 6px -1px rgb(140 146 163 / 50%)',
      minWidth: 'max-content',
      border: '1px solid #DEDFE1'
    };
    let pos = setPosition(tip, binding.value.pos, binding.value.bgColor);
    for (const item in pos) {
      css[item] = pos[item];
    }
    tip.textContent = binding.value.content;
    setCss(tip, css);
    el.appendChild(tip);
  }
}

// 给元素赋值样式
function setCss(obj, css) {
  for (const attr in css) {
    obj.style[attr] = css[attr];
  }
}
// 设置提示框位置样式
function setPosition(tip, pos, color) {
  switch (pos) {
    case "left":
      tip.className += " left";
      document.styleSheets[0].insertRule(
        `.tooltip.left:before{
             content: '';
             position: absolute;
             right: -5px;
             top: 50%;
             transform: translateY(-50%);
             border-left: 5px solid ${color};
             border-top: 5px solid transparent;
             border-bottom: 5px solid transparent;
         }`,
        0
      );
      return { left: "0", top: "50%", transform: "translateX(-110%) translateY(-50%)" };

    case "right":
      tip.className += " right";
      document.styleSheets[0].insertRule(
        `.tooltip.right:before{
           content: '';
           position: absolute;
           left: -5px;
           top: 50%;
           transform: translateY(-50%);
           border-right: 5px solid ${color};
           border-top: 5px solid transparent;
           border-bottom: 5px solid transparent;
       }`,
        0
      );
      return { right: "0", top: "50%", transform: "translateX(110%) translateY(-50%)" };

    case "bottom":
      tip.className += " bottom";
      document.styleSheets[0].insertRule(
        `.tooltip.bottom:before{
           content: '';
           position: absolute;
           top: -5px;
           left: 50%;
           transform: translateX(-50%);
           border-bottom: 5px solid ${color};
           border-left: 5px solid transparent;
           border-right: 5px solid transparent;
       }`,
        0
      );
      return {
        bottom: "-5%",
        left: "50%",
        transform: "translateX(-50%) translateY(130%)"
      };

    case "top":
      tip.className += " top";
      document.styleSheets[0].insertRule(
        `.tooltip.top:before{
           content: '';
           position: absolute;
           bottom: -5px;
           left: 50%;
           transform: translateX(-50%);
           border-top: 5px solid ${color};
           border-left: 5px solid transparent;
           border-right: 5px solid transparent;
       }`,
        0
      );
      return {
        top: "-5%",
        left: "50%",
        transform: "translateX(-50%) translateY(-130%)"
      };
    default:
      tip.className += " top";
      document.styleSheets[0].insertRule(
        `.tooltip.top:before{
         content: '';
         position: absolute;
         bottom: -5px;
         left: 50%;
         transform: translateX(-50%);
         border-bottom: 5px solid ${color};
         border-left: 5px solid transparent;
         border-right: 5px solid transparent;
     }`,
        0
      );
      return {
        top: "-5%",
        left: "50%",
        transform: "translateX(-50%) translateY(-130%)"
      };
  }
}
