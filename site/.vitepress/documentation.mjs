// The review directory and sidebar share this content map.
// ready means a complete preview article exists; it does not mean published.
export const documentationAnchor = (item) => `scope-${item.link.split('/').filter(Boolean).at(-1)}`;

export const documentationGroups = [
  { title: '开始使用', items: [
    { title: '认识采标集', link: '/manual/', ready: true, summary: '认识采标集的用途，了解它怎样减少重复工作，让采购公告资料更方便核对和留存。' },
    { title: '第一次归档', link: '/manual/first-archive/', ready: true, summary: '打开公告、登录、工作台或右键归档、找到并检查文件。' },
  ] },
  { title: '安装、升级与数据维护', items: [
    { title: '安装采标集', link: '/manual/install/', ready: true, summary: 'Chrome、Edge、360 的安装入口，启用插件与确认安装方式。' },
    { title: '安全更新插件', link: '/manual/update/', ready: true, summary: '按商店、360 离线包或文件夹安装方式更新，并核对版本、工作台和已有记录。' },
    { title: '本地数据与文件保存', link: '/manual/local-data/', ready: true, summary: '分清账号、浏览器记录和电脑文件；说明清理风险与文件保存方法。' },
    { title: '卸载、重装与换设备', link: '/manual/reinstall-migration/', ready: true, summary: '保留必要资料，按需卸载、重装或在新设备安装，再确认可以继续使用。' },
  ] },
  { title: '日常归档', items: [
    { title: '支持范围与权限', link: '/manual/supported-sites/', ready: true, summary: '确认支持的站点与公告页面，了解权限和访问要求，再从工作台发起归档。' },
    { title: '归档包与内容核对', link: '/manual/archive-output/', ready: true, summary: '解压 ZIP 归档包，核对项目信息、网页原文和附件，确认资料是否符合本次需要。' },
    { title: 'ZIP 命名规则', link: '/manual/naming/', ready: true, summary: '选择命名预设、查看文件名预览并保存，了解规则的生效范围。' },
    { title: '查看归档历史', link: '/manual/history/', ready: true, summary: '通过关键词、状态和时间找到历史记录，查看当次结果，并定位已保存的 ZIP 归档包。' },
  ] },
  { title: '账号与权益', items: [
    { title: '登录与密码', link: '/manual/account/', ready: true, summary: '通过邮箱验证码注册并登录，按需设置、修改或重置密码，以及退出和切换账号。' },
    { title: '购买与兑换', link: '/manual/purchase/', ready: true, summary: '选择归档套餐，在爱发电购买并领取兑换码，回到采标集兑换并确认到账。' },
    { title: '权益使用规则', link: '/manual/entitlements/', ready: true, summary: '查看当前权益，了解使用顺序、次数扣减和套餐计时规则，并核对归档使用记录。' },
  ] },
  { title: '问题与支持', items: [
    { title: '常见问题', link: '/manual/troubleshooting/', ready: true, summary: '根据当前提示，检查无法开始、归档失败、等待保存，以及找不到记录或文件等问题。' },
    { title: '联系技术支持', link: '/manual/support/', ready: true, summary: '联系方式、版本信息、反馈模板及截图中应遮挡的信息。' },
    { title: '更新日志', link: '/manual/release-notes/', ready: true, summary: '查看版本新增功能、显示改进与归档修复，并找到对应教程和安装更新入口。' },
  ] },
  { title: '协议与使用规则', items: [
    { title: '合法使用说明', link: '/manual/responsible-use/', ready: true, summary: '确认资料使用范围，遵守原网站访问要求，核对并保管归档，转交前检查提供范围。' },
    { title: '隐私政策', link: '/privacy/', ready: true, summary: '完整隐私政策，保留原版本、生效日期与章节链接。' },
    { title: '服务协议', link: '/terms/', ready: true, summary: '完整服务协议，说明服务范围、账号权益和双方责任。' },
    { title: '退款协议', link: '/refund/', ready: true, summary: '完整退款协议，说明申请条件、核验规则和申请方式。' },
  ] },
];
