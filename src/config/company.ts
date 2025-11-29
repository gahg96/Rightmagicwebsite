/**
 * 根据域名动态设置公司信息
 */

export interface CompanyInfo {
  brandName: string;
  brandNameZh: string;
  companyName: string;
  companyNameZh: string;
  description: string;
  descriptionZh: string;
  slogan: string;
  sloganZh: string;
  region: 'domestic' | 'overseas';
}

// 公司信息配置
const companyConfigs: Record<string, CompanyInfo> = {
  // 国内公司 - RightMagic
  'rightmagic': {
    brandName: 'RightMagic',
    brandNameZh: 'RightMagic',
    companyName: 'Shanghai Zhengqi Information Technology Co., Ltd.',
    companyNameZh: '上海正奇信息科技有限公司',
    description: 'Your Digital Strategy Partner. Powering enterprises with ZeroCraft and Gamium AI Sandbox.',
    descriptionZh: '您的数字化战略合作伙伴，提供零匠开发平台与Gamium AI演武场。',
    slogan: 'Tech-Driven Future, Crafted with Magic',
    sloganZh: '科技驱动未来，匠心铸就奇迹',
    region: 'domestic',
  },
  // 海外公司 - RightNova Labs
  'rightnovalabs': {
    brandName: 'RightNova Labs',
    brandNameZh: 'RightNova Labs',
    companyName: 'RightNova Labs Limited',
    companyNameZh: 'RightNova Labs 有限公司',
    description: 'Your Digital Strategy Partner. Powering enterprises with ZeroCraft and Gamium AI Sandbox.',
    descriptionZh: '您的数字化战略合作伙伴，提供零匠开发平台与Gamium AI演武场。',
    slogan: 'Tech-Driven Future, Crafted with Innovation',
    sloganZh: '科技驱动未来，创新铸就奇迹',
    region: 'overseas',
  },
};

/**
 * 获取当前域名的公司信息
 * @param hostname 可选的 hostname，用于服务端渲染
 */
export function getCompanyInfo(hostname?: string): CompanyInfo {
  let domain = 'rightmagic'; // 默认值
  
  if (typeof window !== 'undefined') {
    // 客户端时，从当前域名获取
    domain = extractDomain(window.location.hostname);
  } else if (hostname) {
    // 服务端时，从传入的 hostname 获取
    domain = extractDomain(hostname);
  } else {
    // 服务端渲染时，从环境变量获取
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL || '';
    domain = extractDomain(siteUrl);
  }
  
  return companyConfigs[domain] || companyConfigs['rightmagic'];
}

/**
 * 从 URL 或 hostname 中提取域名标识
 */
function extractDomain(urlOrHostname: string): string {
  if (!urlOrHostname) return 'rightmagic';
  
  // 移除协议
  let domain = urlOrHostname.replace(/^https?:\/\//, '');
  
  // 移除 www.
  domain = domain.replace(/^www\./, '');
  
  // 提取主域名部分（第一个点之前的部分）
  const parts = domain.split('.');
  if (parts.length > 0) {
    const mainDomain = parts[0].toLowerCase();
    
    // 检查是否匹配配置的域名
    if (mainDomain.includes('rightmagic')) {
      return 'rightmagic';
    } else if (mainDomain.includes('rightnova')) {
      return 'rightnovalabs';
    }
  }
  
  return 'rightmagic'; // 默认
}

/**
 * 获取品牌名称（根据语言）
 */
export function getBrandName(locale: string = 'zh'): string {
  const info = getCompanyInfo();
  return locale === 'zh' ? info.brandNameZh : info.brandName;
}

/**
 * 获取公司名称（根据语言）
 */
export function getCompanyName(locale: string = 'zh'): string {
  const info = getCompanyInfo();
  return locale === 'zh' ? info.companyNameZh : info.companyName;
}

