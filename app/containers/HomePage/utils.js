const GLOBAL_URL = 'https://covid19.mathdro.id/api/';
const INDONESIA_URL = 'https://covid19.mathdro.id/api/countries/Indonesia';
const JAPAN_URL = 'https://covid19.mathdro.id/api/countries/Japan';
const USA_URL = 'https://covid19.mathdro.id/api/countries/USA';

export async function fetchData() {
  try {
    const resolveAll = await Promise.all([
      fetch(GLOBAL_URL),
      fetch(INDONESIA_URL),
      fetch(JAPAN_URL),
      fetch(USA_URL),
    ]);
    const parsedAllData = await Promise.all(
      resolveAll.map(each => each.json()),
    );

    return parsedAllData;
  } catch (err) {
    throw new Error(err);
  }
}
