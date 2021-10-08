import Safe from '../../../shared/utils/read-safe';

export default function CompanyInfoMapper(info) {
  const headOffice = Safe(
    () =>
      info.headquarters.state +
      ', ' +
      info.headquarters.city +
      ', ' +
      info.headquarters.address,
  );
  const imageUrl = Safe(() => {
    const site = info.links.website;
    return site ? site + 'favicon.ico' : '';
  });
  return {
    headOffice: headOffice,
    imageUrl: imageUrl,
    founder: info.founder,
    founded: info.founded,
    employes: info.employes,
    marketcap: info.valuation,
    purpose: info.summary,
  };
}
