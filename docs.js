/* Handout registry.
   `pdf` = PDF file name inside docs/ (null while it is still being built).
   `ready` = false while the handout body is still being written. */
window.HANDOUTS = [
  {
    id: 'dyn_zero',
    course: '动力学',
    ready: true,
    title: '零基础精讲：从"力决定加速度"讲到"动量矩决定转动"',
    sub: '第1部分 质点动力学 · 第2部分 动量定理与质量流 · 第3部分 动量矩定理 · 20 张自绘图 · 三级例题（看懂→模仿→应考） · 附录公式总表',
    meta: '依据三份《动力学》课件（共 97 页），从零讲起、完整推导',
    html: 'docs/dyn_zero.html',
    pdf: '理论力学-动力学-零基础精讲.pdf'
  },
  {
    id: 'dyn1',
    course: '动力学',
    ready: true,
    title: '第1章 质点动力学',
    sub: '动力学概述与两类基本问题 · 牛顿三大定律 · 质点运动微分方程（三种形式） · 四种力函数的积分方法 · 例题精讲 · 补充练习',
    meta: '依据《动力学-1-质点动力学》21 页课件',
    html: 'docs/dyn1.html',
    pdf: '动力学-第1章-质点动力学.pdf'
  },
  {
    id: 'dyn23',
    course: '动力学',
    ready: true,
    title: '第2–3章 动量定理与动量矩定理',
    sub: '动量定理与质心运动定理 · 定常质量流与固体相互作用 · 变质量系统与火箭方程 · 动量矩定理与定轴转动微分方程 · 转动惯量 · 三大定理统一视角',
    meta: '依据《动力学-2-动量定理-质量流》25 页 +《动力学-3-动量矩定理》51 页课件',
    html: 'docs/dyn23.html',
    pdf: '动力学-第2-3章-动量定理与动量矩定理.pdf'
  },
  {
    id: 'fl4_zero',
    course: '流体力学A2',
    ready: true,
    title: '零基础精讲：从"水头到底丢在哪"讲到 λ 与 ζ 怎么算',
    sub: '两类损失 · 层流与湍流 · 圆管层流解 · 湍流阻力与混合长度 · 尼古拉兹五区 · 工业管道 λ · 非圆管 · 局部损失 · 14 张自绘图 · 13 个三级例题',
    meta: '依据《流体力学A2 第4章 流动阻力和能量损失（完）》125 页课件',
    html: 'docs/fl4_zero.html',
    pdf: '流体力学A2-第4章-流动阻力和能量损失.pdf'
  },
  {
    id: 'fluid2',
    course: '流体力学A2',
    ready: true,
    title: '第2章 流体静力学',
    sub: '静压强两特性 · 欧拉平衡方程与等压面 · 三种压强与测压计 · 平面壁总压力 · 曲面壁总压力与压力体 · 相对平衡 · 应试速查',
    meta: '依据《流体力学A2_第2章_流体静力学（完）》163 页课件',
    html: 'docs/fluid2.html',
    pdf: '流体力学A2-第2章-流体静力学.pdf'
  },
  {
    id: 'fluid3',
    course: '流体力学A2',
    ready: true,
    title: '第3章 一元流体动力学基础（3.1–3.10）',
    sub: '拉格朗日法与欧拉法 · 质点导数 · 定常与非定常 · 流线与迹线 · 连续性方程 · 元流与总流能量方程 · 文丘里/虹吸/泵 · 总水头线 · 三大方程对照',
    meta: '依据 3.1–3.6（97 页）与 3.7–3.10（68 页）两份课件',
    html: 'docs/fluid3.html',
    pdf: '流体力学A2-第3章-一元流体动力学基础.pdf'
  },
  {
    id: 'thermo_zero',
    course: '工程热力学',
    ready: true,
    title: '零基础精讲：从一个打气筒讲到一台压气机',
    sub: '第1–7 章完整推导 · 每一步都写出来 · 每节三级例题（看懂→模仿→应考） · 35 张自制示意图 · 为什么/打个比方/易错三连/自测',
    meta: '依据谭羽非等《工程热力学》（第七版）第 1–7 章 + 热力学 1–7 章课件',
    html: 'docs/thermo_zero.html',
    pdf: '工程热力学-零基础精讲.pdf'
  },
  {
    id: 'thermo_calc',
    course: '工程热力学',
    ready: true,
    title: '计算练习解题讲义（前8周）',
    sub: '《计算练习-前8周》1-3～5-24 共 41 题：每题给出考点、取什么系统、用哪个方程、关键代入式与最终数值；含第7章压气机补充例题与各章补充练习',
    meta: '依据《计算练习-前8周》扫描件 + 热力学 1–7 章课件',
    html: 'docs/thermo_calc.html',
    pdf: '工程热力学-计算练习解题讲义.pdf'
  },
  {
    id: 'thermo_qa',
    course: '工程热力学',
    ready: true,
    title: '知识点简答题作答讲义（前8周）',
    sub: '25 道简答题：完整推导链＋规范简图＋T-s/p-v 图＋易错点，附「高频考点自测清单」与「1–8 周公式总表」',
    meta: '依据《知识点简答题-前8周》+ 热力学 1–7 章课件',
    html: 'docs/thermo_qa.html',
    pdf: '工程热力学-知识点简答题作答讲义.pdf'
  }
];

