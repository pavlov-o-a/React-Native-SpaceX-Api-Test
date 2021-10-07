export default function LunchesMapper(launches) {
  return Array.from(launches).reduce((mapped, launch) => {
    if (launch.details) {
      const date = new Date(launch.date_utc).toLocaleString('en-GB');
      mapped.push({
        name: launch.name,
        date: date,
        details: launch.details,
      });
    }
    return mapped;
  }, []);
}
